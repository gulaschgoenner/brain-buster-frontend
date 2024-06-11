export type Quiz = {
    id: string;
    name: string;
    description: string;
    questions?: Question[];
};

export type QuizShort = {
    id: string;
    name: string;
    description: string;
    questionCount: number;
};

export type Question = {
    id: string;
    text: string;
    answers: Answer[];
};

export type Answer = {
    id: string;
    text: string;
    isTrue: boolean;
};

export type PlayerScore = {
    id: string;
    name: string;
    score: number;
};

export type Player = {
    id: string;
    name: string;
    password: string;
};


// export enum QuestionType {
//     STANDARD = "STANDARD",
//     ESTIMATION = "ESTIMATION",
// }