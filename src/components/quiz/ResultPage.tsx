import {Quiz} from "../../utils/types.tsx";
import Leaderboard from "../LeaderBoard.tsx";
import {PLAYER_SCORES} from "../../test/mock/responses.ts";

interface Props {
    quiz: Quiz;
}

function getAnswerScore(quiz: Quiz) {
    let score = 0;
    quiz.questions.forEach(q => {
        score += q.answers.filter(a => a.isTrue !== !!a.isClicked).length === 0 ? 100 : 0;
    })
    return score
}

function ResultPage({quiz}: Props) {

    return (
        <>
            <h4>Dein Ergebnis: {getAnswerScore(quiz)}</h4>
            <Leaderboard scores={PLAYER_SCORES}/>
        </>
    );
}

export default ResultPage;
