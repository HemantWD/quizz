import React from "react";

const EndPage = ({ score, totalQuestions }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
      <h1 className="text-2xl font-semibold mb-4 text-center">
        Quiz Finished!
      </h1>
      <p className="text-lg">
        Your Score: {score}/{totalQuestions}
      </p>
      <button>Play Again</button>
    </div>
  );
};

export default EndPage;
