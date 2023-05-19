import React from 'react';
import styles from './TestResults.module.css'

const TestResults = ({ score, questionsData }) => {
  return (
    <div>
      <h3>Test Results</h3>
      <p>Obtained Score: {score}/{questionsData.length * 2}</p>
      {score >= 12 ? (
        <p>Congratulations! You passed the test.</p>
      ) : (
        <p>Sorry, you failed the test.</p>
      )}
      <span className={styles.testresultsbtn}>
      <button onClick={() => window.location.reload()}>Restart Test</button>
      </span>
    </div>
  );
};

export default TestResults;
