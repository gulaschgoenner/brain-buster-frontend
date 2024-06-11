import {Answer, Question as QuestionType} from "../../utils/types.tsx";
import Answers from "./Answers.tsx";

interface Props {
    question: QuestionType;
    handleSetAnswers: (updatedAnswers: Answer[]) => void;
    nextQuestion: () => void;
}

function Question({question, handleSetAnswers, nextQuestion}: Props) {

    return (
        <>
            <h4>{question.text}</h4>
            <div>
                <Answers answers={question.answers}
                         setAnswers={handleSetAnswers}/>
            </div>
            <button onClick={() => nextQuestion()}>
                Einreichen
            </button>
        </>
    );
}

export default Question;
