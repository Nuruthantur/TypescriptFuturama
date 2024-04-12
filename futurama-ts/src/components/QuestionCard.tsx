import React, { MouseEvent } from "react";
// Types
import { AnswerObject } from "../@types/questions";
// Styles
import { Wrapper, ButtonWrapper } from "../styles/QuestionCardStyles";

interface QuestionCardProps {
  questionNr: number;
  totalQuestions: number;
  question: string;
  answers: string[];

  callback: (e: MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  userAnswer?: AnswerObject | undefined;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => {
  console.log(typeof "userAnswer");
  return (
    <Wrapper>
      <p className="number">
        Question: {questionNr} / {totalQuestions}
      </p>
      {/* <p dangerouslySetInnerHTML={{ __html: question }} /> */}
      <p>{question}</p>
      <div>
        {answers.map((answer) => (
          <ButtonWrapper
            key={answer}
            correct={userAnswer?.correctAnswer === answer}
            userClicked={userAnswer?.answer === answer}>
            <button
              disabled={userAnswer ? true : false}
              value={answer}
              // onClick={(e: MouseEvent<HTMLButtonElement, MouseEvent>) => callback(e)}>
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => callback(e)}>
              <span>{answer}</span>
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  );
};

export default QuestionCard;

interface QuestionCardProps {
  questionNr: number;
  totalQuestions: number;
  question: string;
  answers: string[];
  userAnswer?: AnswerObject;
  callback: (e: MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
