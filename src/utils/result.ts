import {Answer, Quiz} from "./types.tsx";

export const MAX_TIME = 10;
export const MAX_TIME_BONUS = 100;
export const QUESTION_POINTS = 100;

export function hasCorrectAnswers(answers: Answer[]) {
    return answers.filter(a => a.isTrue !== !!a.isClicked).length === 0
}

export function getCorrectAnswerCount(quiz: Quiz) {
    return quiz.questions.filter(q => hasCorrectAnswers(q.answers)).length
}

export function getAnswerScore(quiz: Quiz) {
    return getCorrectAnswerCount(quiz) * QUESTION_POINTS
}

export function getSpeedScore(quiz: Quiz, questionTimes: number[]) {
    let score = 0;
    quiz.questions.forEach((q, i) => {
        score += hasCorrectAnswers(q.answers) ? timeToScore(questionTimes[i]) : 0
    })
    return score
}

export function timeToScore(time: number): number {

    if (time <= 0) {
        return MAX_TIME_BONUS;
    }

    const score = MAX_TIME_BONUS * (0.5 - time / MAX_TIME);

    return Math.max(0, Math.floor(score));
}