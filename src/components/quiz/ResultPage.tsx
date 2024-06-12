import {Quiz} from "../../utils/types.tsx";
import Leaderboard from "../LeaderBoard.tsx";
import {PLAYER_SCORES} from "../../test/mock/responses.ts";
import {getAnswerScore, getCorrectAnswerCount, getSpeedScore, MAX_TIME_BONUS} from "../../utils/result.ts";

interface Props {
    quiz: Quiz;
    questionTimes: number[];
    tryAgain: () => void;
}


function ResultPage({quiz, questionTimes, tryAgain}: Props) {
    const endScore = getAnswerScore(quiz) + getSpeedScore(quiz, questionTimes);
    const speedBonus = Math.round(100 * (getSpeedScore(quiz, questionTimes) / (quiz.questions.length * MAX_TIME_BONUS)));
    return (
        <div className={"d-flex"}>
            <div className={"p-3"}>
                <h4>Dein
                    Ergebnis: {endScore}</h4>
                <p>Richtige Antworten: {getCorrectAnswerCount(quiz)}/{quiz.questions.length}</p>
                <p>Antwortpunkte: {getAnswerScore(quiz)}</p>
                <p>Geschwindigkeitpunkte: {getSpeedScore(quiz, questionTimes)}</p>
                <p>Geschwindigkeitsbonus: {speedBonus}%</p>
                <button id={"try-again"} onClick={() => tryAgain()}>Erneut Versuchen</button>
            </div>
            <div className={"p-3"}>
                <Leaderboard scores={PLAYER_SCORES}/>
            </div>
        </div>
    );
}

export default ResultPage;
