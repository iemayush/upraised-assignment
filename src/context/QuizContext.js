import React, { createContext, useState } from "react";
import {
  QUIZ_ID,
  CURRENT_QUESTION,
  QUESTIONS,
  SCORE,
  CORRECT_ANSWERS,
} from "./../constants/constants";

const QuizContext = createContext();

const initialState = {
  [QUIZ_ID]: 1234,
  [QUESTIONS]: [
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin"],
      correctOption: "Paris",
    },
    {
      id: 2,
      question: "Who painted the Mona Lisa?",
      options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh"],
      correctOption: "Leonardo da Vinci",
    },
    {
      id: 3,
      question: "What is the largest planet in our solar system?",
      options: ["Jupiter", "Saturn", "Earth"],
      correctOption: "Jupiter",
    },
    {
      id: 4,
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin"],
      correctOption: "Paris",
    },
    {
      id: 5,
      question: "Who painted the Mona Lisa?",
      options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh"],
      correctOption: "Leonardo da Vinci",
    },
    {
      id: 6,
      question: "What is the largest planet in our solar system?",
      options: ["Jupiter", "Saturn", "Earth"],
      correctOption: "Jupiter",
    },
  ],
  [CURRENT_QUESTION]: 0,
  [SCORE]: 0,
  [CORRECT_ANSWERS]: [],
};

const QuizProvider = ({ children }) => {
  const [quizState, setQuizState] = useState(initialState);

  const updateQuizState = (newState) => {
    setQuizState((prevState) => ({
      ...prevState,
      ...newState,
    }));
  };

  return (
    <QuizContext.Provider value={{ quizState, updateQuizState }}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContext;
export { QuizProvider };
