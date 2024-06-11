import styles from '../components.module.scss'
import {Answer} from "../../utils/types.tsx";
import Checkbox from "./Checkbox.tsx";

interface Props {
    answers?: Answer[];
    setAnswers: (updatedAnswers: Answer[]) => void;
}

function Answers({answers, setAnswers}: Props) {

    return (
        <>
            <div className={styles.answers}>
                {answers?.map(a =>
                    <Checkbox checked={!!a.isClicked} label={a.text}
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
