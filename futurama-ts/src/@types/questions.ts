import { shuffleArray } from "../components/utils"

// types for Game.tsx
export type gameFetchOK = gameResult[]
export interface gameFetchNotOK {
  error: string
}
export interface gameResult {
  id: number
  question: string
  possibleAnswers: string[]
  correctAnswer: any
}

// types for GameApp.tsx

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

export type Question = {
  id: number
  question: string
  possibleAnswers: string[]
  correctAnswer: string;
};

export type QuestionsState = Question & { answers: string[] };

export const fetchQuizQuestions = async (): Promise<QuestionsState[]> => {
  const endpoint = `https://api.sampleapis.com/futurama/questions`; 
  const data = await (await fetch(endpoint)).json();
  // console.log(data)
  return data.map((question: Question) => (
    // curly braces because it's an object
    {
    //spread array, shuffle possible answers
    ...question, 
    answers: shuffleArray([...question.possibleAnswers])
  }
  ))
};
