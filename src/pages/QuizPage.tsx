import '../App.css'
import {useParams} from "react-router-dom";
import {Helmet} from 'react-helmet';
import Navigation from "../components/Navigation.tsx";
import {QUIZ1} from "../test/mock/responses.ts";
import {useEffect, useState} from "react";
import {Answer, Quiz} from "../utils/types.tsx";
import {shuffleArray} from "../utils/util.ts";
import Question from "../components/quiz/Question.tsx";
import ResultPage from "../components/quiz/ResultPage.tsx";

const GRACEPERIOD = 0.5;


function QuizPage() {
    const {quizId} = useParams();
    //TODO: Quiz vom backend holen (once)
    const [quiz, setQuiz] = useState<Quiz>(QUIZ1);
    const [activeQuestionIndex, setActiveQuestionindex] = useState(0);
    const [questionStartTime, setQuestionStartTime] = useState<number | null>(null);
    const [questionTimes, setQuestionTimes] = useState<number[]>([]);

    function shuffleQuestions() {
        const shuffledQuestions = quiz.questions!.map(question => {
            const shuffledAnswers = shuffleArray(question.answers.map(answer => ({...answer, isClicked: false})));
            return {...question, answers: shuffledAnswers};
        });
        setQuiz({...quiz, questions: shuffleArray(shuffledQuestions)});
    }

    useEffect(() => {
        shuffleQuestions();
        setQuestionStartTime(Date.now());
    }, []);

    useEffect(() => {
        // Set the start time for the new question
        if (activeQuestionIndex < quiz.questions.length) {
            setQuestionStartTime(Date.now());
        }
    }, [activeQuestionIndex]);

    const handleSetAnswers = (questionIndex: number, updatedAnswers: Answer[]) => {
        const updatedQuestions = quiz.questions!.map((question, index) => {
            if (index === questionIndex) {
                return {...question, answers: updatedAnswers};
            }
            return question;
        });
        setQuiz({...quiz, questions: updatedQuestions});
    };

    const nextQuestion = (time: number) => {
        if (questionStartTime) {
            const timeTaken = (time - questionStartTime) / 1000 - GRACEPERIOD;
            setQuestionTimes([...questionTimes, timeTaken]);
        }
        setActiveQuestionindex(prev => prev + 1);
    };

    const tryAgain = () => {
        setActiveQuestionindex(0);
        setQuestionTimes([]);
        shuffleQuestions();
        setQuestionStartTime(Date.now());
    };

    return (
        <>
            <Helmet title={"Quiz | BrainBuster"}/>
            {/*TODO: Beantwortete Fragen zu Count umwandeln*/}
            <Navigation progress={activeQuestionIndex * 100 / quiz.questions.length}/>
            <h2>
                Quiz: {quiz.name}
            </h2>
            {activeQuestionIndex < quiz.questions.length ?
                <Question question={quiz.questions[activeQuestionIndex]}
                          handleSetAnswers={(updatedAnswers: Answer[]) => handleSetAnswers(activeQuestionIndex, updatedAnswers)}
                          nextQuestion={nextQuestion}/>
                : <ResultPage quiz={quiz} questionTimes={questionTimes} tryAgain={tryAgain}/>}
        </>
    )
}

export default QuizPage;
