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

function QuizPage() {
    const {quizId} = useParams();
    //TODO: Quiz vom backend holen (once)
    const [quiz, setQuiz] = useState<Quiz>(QUIZ1);
    const [activeQuestionIndex, setActiveQuestionindex] = useState(0)

    useEffect(() => {
        const shuffledQuestions = quiz.questions!.map(question => {
            const shuffledAnswers = shuffleArray(question.answers.map(answer => ({...answer, isClicked: false})));
            return {...question, answers: shuffledAnswers};
        });
        setQuiz({...quiz, questions: shuffleArray(shuffledQuestions)});
    }, [])

    const handleSetAnswers = (questionIndex: number, updatedAnswers: Answer[]) => {
        const updatedQuestions = quiz.questions!.map((question, index) => {
            if (index === questionIndex) {
                return {...question, answers: updatedAnswers};
            }
            return question;
        });
        setQuiz({...quiz, questions: updatedQuestions});
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
                          nextQuestion={() => setActiveQuestionindex(prev => prev + 1)}/>
                : <ResultPage quiz={quiz}/>}
        </>
    )
}

export default QuizPage;