import React from 'react';

const TestResults = ({ score, questionsData }) => {
  return (
    <div>
      <h2>Test Results</h2>
      <p>Obtained Score: {score}/{questionsData.length * 2}</p>
      {score >= 12 ? (
        <p>Congratulations! You passed the test.</p>
      ) : (
        <p>Sorry, you failed the test.</p>
      )}
      <button onClick={() => window.location.reload()}>Restart Test</button>
    </div>
  );
};

export default TestResults;
