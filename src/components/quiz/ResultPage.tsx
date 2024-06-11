import {Answer, Quiz} from "../../utils/types.tsx";
import Leaderboard from "../LeaderBoard.tsx";
import {PLAYER_SCORES} from "../../test/mock/responses.ts";

interface Props {
    quiz: Quiz;
    questionTimes: number[];
}

const MAX_TIME = 10;
const MAX_TIME_BONUS = 100;
const QUESTION_POINTS = 100;

function hasCorrectAnswers(answers: Answer[]) {
    return answers.filter(a => a.isTrue !== !!a.isClicked).length === 0
}

function getCorrectAnswerCount(quiz: Quiz) {
    return quiz.questions.filter(q => hasCorrectAnswers(q.answers)).length
}

function getAnswerScore(quiz: Quiz) {
    return getCorrectAnswerCount(quiz) * QUESTION_POINTS
}

function getSpeedScore(quiz: Quiz, questionTimes: number[]) {
    let score = 0;
    quiz.questions.forEach((q, i) => {
        score += hasCorrectAnswers(q.answers) ? timeToScore(questionTimes[i]) : 0
    })
    return score
}

function timeToScore(time: number): number {

    if (time <= 0) {
        return MAX_TIME_BONUS;
    }

    const score = MAX_TIME_BONUS * (1 - time / MAX_TIME);

    return Math.max(0, Math.floor(score));
}

function ResultPage({quiz, questionTimes}: Props) {
    const endScore = getAnswerScore(quiz) + getSpeedScore(quiz, questionTimes);
    const speedBonus = Math.round(100 * (getSpeedScore(quiz, questionTimes) / (quiz.questions.length * MAX_TIME_BONUS)));
    return (
        <>
            <h4>Dein
                Ergebnis: {endScore}</h4>
            <p>Richtige Antworten: {getCorrectAnswerCount(quiz)}/{quiz.questions.length}</p>
            <p>Antwortpunkte: {getAnswerScore(quiz)}</p>
            <p>Geschwindigkeitpunkte: {getSpeedScore(quiz, questionTimes)}</p>
            <p>Geschwindigkeitsbonus: {speedBonus}%</p>
            <Leaderboard scores={PLAYER_SCORES}/>
        </>
    );
}

export default ResultPage;
