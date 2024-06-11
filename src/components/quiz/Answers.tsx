import styles from '../components.module.scss'
import {Answer} from "../../utils/types.tsx";
import Checkbox, {AnswerResult} from "./Checkbox.tsx";

interface Props {
    answers?: Answer[];
    setAnswers: (updatedAnswers: Answer[]) => void;
    showCorrect: boolean;
}

function getResult(answer: Answer) {
    if (answer.isClicked && answer.isTrue) {
        return AnswerResult.TRUE;
    } else if (!answer.isTrue && answer.isClicked) {
        return AnswerResult.FALSE;
    }
    return AnswerResult.NONE;
}

function Answers({answers, setAnswers, showCorrect}: Props) {

    return (
        <>
            <div className={styles.answers}>
                {answers?.map(a =>
                    <Checkbox key={a.id}
                              checked={!!a.isClicked}
                              label={a.text}
                              disabled={showCorrect}
                              result={showCorrect ? getResult(a) : AnswerResult.NONE}
                              onChange={(checked) => setAnswers(answers?.map(e => e.id === a.id ? {
                                  ...e,
                                  isClicked: checked
                              } : e))}/>
                )}
            </div>
        </>
    );
}

export default Answers;
