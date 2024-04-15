// types for Game.tsx
export type gameFetchOK = gameResult[];
export interface gameFetchNotOK {
  error: string;
}
export interface gameResult {
  id: number;
  question: string;
  possibleAnswers: string[];
  correctAnswer: string;
}

// types for GameApp.tsx

export type AnswerObject = {
  question: string | number;
  answer: string | number;
  correct: boolean;
  correctAnswer: string | number;
  currentTarget: string;
};

export type Question = {
  id: number;
  question: string;
  possibleAnswers: string[] | number;
  correctAnswer: string | number;
};

export type QuestionsState = Question & { answers: string[] };
