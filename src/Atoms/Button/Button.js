// import React from 'react'
// import styles from './Button.module.css'

// export default function Button({buttonText, style, onClick}) {
//   return (
//     <div className={styles.wrapper}>
//         <button style={style} onClick={onClick}>{buttonText}</button>
//     </div>
//   )
// }

import React from 'react';

const Button = ({ currentQuestionIndex, handleNextButtonClick, submitTest, totalQuestions }) => {
  return (
    <div className="buttons">
      {currentQuestionIndex !== totalQuestions - 1 ? (
        <button onClick={handleNextButtonClick}>Next</button>
      ) : (
        <button onClick={submitTest}>Submit</button>
      )}
    </div>
  );
};

export default Button;




