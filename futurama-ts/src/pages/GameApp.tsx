import React, { MouseEvent, useState } from "react";
// Components
import QuestionCard from "../components/QuestionCard";
// types
import { AnswerObject, QuestionsState } from "../@types/questions";
// Styles
import { GlobalStyle, Wrapper } from "../styles/App.styles";
import { fetchQuizQuestions } from "../utils/fetchQuizQuestions";

const TOTAL_QUESTIONS = 10;

const GameApp: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState(0);
  //NOTE - Option 1 - with AnswerObject
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  //NOTE - Option 2 - without AnswerObject
  // const [userAnswers, setUserAnswers] = useState([]);

  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions();
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!gameOver) {
      // User's answer
      const answer = e.currentTarget.value;
      // Check answer against correct answer
      const correct = questions[number]?.correctAnswer === answer;
      // Add score if answer is correct
      if (correct) setScore((prev) => prev + 1);
      // Save the answer in the array for user answers
      //NOTE - Option 1
      //     const answerObject: AnswerObject = {
      //       question: questions[number].question,
      //       answer,
      //       correct: questions[number].correctAnswer === answer,
      //       correctAnswer: questions[number].correctAnswer,
      //     };
      //     setUserAnswers((prev) => [...prev, answerObject]);
      //   }
      // };
      //NOTE - Option 2
      setUserAnswers((prev) => [
        ...prev,
        {
          question: questions[number].question,
          answer,
          correct: questions[number].correctAnswer === answer,
          correctAnswer: questions[number].correctAnswer,
        },
      ]);
    }
  };

  const nextQuestion = () => {
    // Move to the next question if not the last question
    const nextQ = number + 1;

    if (nextQ === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQ);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Futurama Quiz</h1>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button className="start" onClick={startTrivia}>
            Start
          </button>
        ) : null}
        {!gameOver ? <p className="score">Score: {score}</p> : null}
        {loading ? <p>Loading Questions...</p> : null}
        {!loading && !gameOver && (
          <QuestionCard
            questionNr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
            // callback={(e) =>
            //   checkAnswer({ currentTarget: { value: e.target.value } })
            // }
          />
        )}
        {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== TOTAL_QUESTIONS - 1 ? (
          <button className="next" onClick={nextQuestion}>
            Next Question
          </button>
        ) : null}
      </Wrapper>
    </>
  );
};

export default GameApp;
