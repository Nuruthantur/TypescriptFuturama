import { Question, QuestionsState } from "../@types/questions";
import { shuffleArray } from "./utils";

export const fetchQuizQuestions = async (): Promise<QuestionsState[]> => {
  const endpoint = `https://api.sampleapis.com/futurama/questions`;
  const data = await (await fetch(endpoint)).json();

  return data.map((question: Question) =>
    // curly braces because it's an object
    ({
      //spread array, shuffle possible answers
      ...question,
      answers: shuffleArray([...question.possibleAnswers] as string[]),
      // answers: shuffleArray([...question.possibleAnswers] as string[])
    })
  );
};
