import {Quiz, QuizShort} from "../../utils/types.tsx";

export const quizzes: QuizShort[] = [
    {
        id: "1",
        name: "Allgemeinwissen",
        description: "Ein Quiz, um dein Allgemeinwissen zu testen.",
        questionCount: 3
    },
    {
        id: "2",
        name: "Mathematik",
        description: "Teste dein Wissen in Mathematik.",
        questionCount: 3
    },
];

export const quiz1: Quiz = {
    id: "1",
    name: "Allgemeinwissen",
    description: "Ein Quiz, um dein Allgemeinwissen zu testen.",
    questions: [
        {
            id: "1-1",
            text: "Welches ist das größte Land der Welt nach Fläche?",
            answers: [
                {id: "1-1-1", text: "China", isTrue: false},
                {id: "1-1-2", text: "USA", isTrue: false},
                {id: "1-1-3", text: "Russland", isTrue: true},
                {id: "1-1-4", text: "Kanada", isTrue: false},
            ],
        },
        {
            id: "1-2",
            text: "Wie viele Planeten gibt es im Sonnensystem?",
            answers: [
                {id: "1-2-1", text: "7", isTrue: false},
                {id: "1-2-2", text: "8", isTrue: true},
                {id: "1-2-3", text: "9", isTrue: false},
                {id: "1-2-4", text: "10", isTrue: false},
            ],
        },
        {
            id: "1-3",
            text: "Wer schrieb 'Faust'?",
            answers: [
                {id: "1-3-1", text: "Friedrich Schiller", isTrue: false},
                {id: "1-3-2", text: "Gotthold Ephraim Lessing", isTrue: false},
                {id: "1-3-3", text: "Johann Wolfgang von Goethe", isTrue: true},
                {id: "1-3-4", text: "Heinrich Heine", isTrue: false},
            ],
        },
    ],
}

export const quiz2: Quiz = {
    id: "2",
    name: "Mathematik",
    description: "Teste dein Wissen in Mathematik.",
    questions: [
        {
            id: "2-1",
            text: "Was ist 5 + 7?",
            answers: [
                {id: "2-1-1", text: "10", isTrue: false},
                {id: "2-1-2", text: "11", isTrue: false},
                {id: "2-1-3", text: "12", isTrue: true},
                {id: "2-1-4", text: "13", isTrue: false},
            ],
        },
        {
            id: "2-2",
            text: "Wie lautet die Quadratwurzel von 64?",
            answers: [
                {id: "2-2-1", text: "6", isTrue: false},
                {id: "2-2-2", text: "7", isTrue: false},
                {id: "2-2-3", text: "8", isTrue: true},
                {id: "2-2-4", text: "9", isTrue: false},
            ],
        },
        {
            id: "2-3",
            text: "Wie viele Seiten hat ein Hexagon?",
            answers: [
                {id: "2-3-1", text: "5", isTrue: false},
                {id: "2-3-2", text: "6", isTrue: true},
                {id: "2-3-3", text: "7", isTrue: false},
                {id: "2-3-4", text: "8", isTrue: false},
            ],
        },
    ],
}
