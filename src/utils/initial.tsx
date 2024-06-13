import {Quiz, QuizShort} from "./types.tsx";

export const INITIAL_QUIZZES: QuizShort[] = [];


export const INITIAL_QUIZ: Quiz = {
    id: "id?",
    name: "Quiz",
    description: "",
    scores: [],
    questions: [
        {
            id: "Frage",
            text: "Frage?",
            answers: [
                {id: "2-1-1", text: "10", isTrue: false},
            ],
        },
    ],
}