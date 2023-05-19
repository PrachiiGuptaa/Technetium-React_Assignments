import React from 'react';
import styles from './Button.module.css';

const Button = ({ currentQuestionIndex, handleNextButtonClick, submitTest, totalQuestions }) => {
  return (
    <div className={styles.buttons}>
      {currentQuestionIndex !== totalQuestions - 1 ? (
        <button onClick={handleNextButtonClick}>Next</button>
      ) : (
        <button onClick={submitTest}>Submit</button>
      )}
    </div>
  );
};

export default Button;




