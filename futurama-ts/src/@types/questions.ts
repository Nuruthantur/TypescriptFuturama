import { shuffleArray } from "../components/utils"

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
  return data.results.map((question: Question) => ({
    ...question, answers: shuffleArray([...question.correctAnswer])
  }))
  // return data.results.map((question: Question) => ({
    // ...question, answers: shuffleArray([...question.correctAnswer])
  // }))
};