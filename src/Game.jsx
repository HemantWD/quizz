import React, { useState, useEffect } from "react";
import data from "./data";
import EndPage from "./EndPage";

const Game = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setQuestions(data);
  }, []);

  const handleOptionClick = (selected) => {
    const selectedQuestion = questions[currentQuestion];
    if (selectedQuestion.correctAnswer === selected) {
      setScore(score + 1);
    }
  };

  const handleNextClick = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentQuestion(-1);
    }
  };

  return (
    <>
      {currentQuestion !== -1 ? (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
          {questions.map(
            (question, index) =>
              index === currentQuestion && (
                <div key={index}>
                  <h1 className="text-2xl font-semibold mb-4 text-center">
                    {question.questions}
                  </h1>
                  <div className="space-y-4 mb-4">
                    <button
                      className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
                      onClick={() => handleOptionClick(1)}
                    >
                      {question.choice1}
                    </button>
                  </div>
                  <div className="space-y-4 mb-4">
                    <button
                      className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
                      onClick={() => handleOptionClick(2)}
                    >
                      {question.choice2}
                    </button>
                  </div>
                  <div className="space-y-4 mb-4">
                    <button
                      className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
                      onClick={() => handleOptionClick(3)}
                    >
                      {question.choice3}
                    </button>
                  </div>
                  <div className="space-y-4 mb-4">
                    <button
                      className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
                      onClick={() => handleOptionClick(4)}
                    >
                      {question.choice4}
                    </button>
                  </div>
                </div>
              )
          )}
          {currentQuestion < questions.length && (
            <button
              className="w-32 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              onClick={handleNextClick}
            >
              Next
            </button>
          )}
        </div>
      ) : (
        <EndPage score={score} totalQuestions={questions.length} />
      )}
    </>
  );
};

export default Game;
