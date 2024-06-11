import {Answer, Question as QuestionType} from "../../utils/types.tsx";
import Answers from "./Answers.tsx";
import {useState} from "react";

interface Props {
    question: QuestionType;
    handleSetAnswers: (updatedAnswers: Answer[]) => void;
    nextQuestion: (time: number) => void;
}

function Question({question, handleSetAnswers, nextQuestion}: Props) {
    const [finished, setFinished] = useState(false);
    const [time, setTime] = useState(0);
    console.log(finished);
    return (
        <>
            <h4>{question.text}</h4>
            <div>
                <Answers answers={question.answers}
                         setAnswers={handleSetAnswers}
                         showCorrect={finished}
                />
            </div>
            {
                !finished ?
                    <button onClick={() => {
                        setTime(Date.now())
                        //TODO:
                        //Questiontime anzeigen
                        setFinished(true)
                    }}>
                        Einreichen
                    </button> :
                    <button onClick={() => {
                        setTime(0);
                        setFinished(false)
                        nextQuestion(time)
                    }}>
                        Weiter
                    </button>
            }
        </>
    );
}

export default Question;
