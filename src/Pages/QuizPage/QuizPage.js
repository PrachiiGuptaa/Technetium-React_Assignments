import React, { useState, useEffect } from 'react';
import Question from '../../Atoms/Question/Question';
import Options from '../../Atoms/Options/Options';
import Button from '../../Atoms/Button/Button';
import Timer from '../../Atoms/Timer/Timer';
import TestResults from '../TestResults/TestResults';
import { questionsData } from './../../ConstantData/Constant';
import styles from './QuizPage.module.css'

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [timeRemaining, setTimeRemaining] = useState(600); // 10 minutes in seconds
  const [showScores, setShowScores] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionSelect = optionIndex => {
    setSelectedOptions(prevOptions => ({
      ...prevOptions,
      [currentQuestionIndex]: optionIndex
    }));
  };

  const handleNextButtonClick = () => {
    const selectedOptionIndex = selectedOptions[currentQuestionIndex];

    // If no option is selected
    if (selectedOptionIndex === undefined) {
      return;
    }

    if (currentQuestionIndex === questionsData.length - 1) {
      submitTest();
    } else {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    }
  };

  const submitTest = () => {
    // Calculate score
    let totalScore = 0;
    let obtainedScore = 0;
    Object.keys(selectedOptions).forEach(questionIndex => {
      const selectedOptionIndex = selectedOptions[questionIndex];
      const correctAnswer = questionsData[questionIndex].CorrectAnswer;
      const selectedAnswer = questionsData[questionIndex].Options[selectedOptionIndex];
      if (selectedAnswer === correctAnswer) {
        obtainedScore += 2;
      }
      totalScore += 2;
    });

    setScore(obtainedScore);
    setShowScores(true);
  };

  // If player fails to answer the questions within the time
  useEffect(() => {
    if (timeRemaining === 0) {
      submitTest();
    }
  }, [timeRemaining]);

  return (
    <div className={styles.wrapper}>
      {!showScores ? (
        <div className={styles.container}>
          <div className={styles.question}>
          <Question question={questionsData[currentQuestionIndex].Question} /></div>
          <div className={styles.option}>
          <Options
            options={questionsData[currentQuestionIndex].Options}
            selectedOptionIndex={selectedOptions[currentQuestionIndex]}
            handleOptionSelect={handleOptionSelect}
          />
          </div>
          <div className={styles.btncontainer}>
            <div className={styles.btn}>
          <Button
            currentQuestionIndex={currentQuestionIndex}
            handleNextButtonClick={handleNextButtonClick}
            submitTest={submitTest}
            totalQuestions={questionsData.length}
          />
          </div>
          </div>
          <Timer timeRemaining={timeRemaining} setTimeRemaining={setTimeRemaining} submitTest={submitTest} />
          </div>
      ) : (
        <div className={styles.result}>
        <TestResults score={score} questionsData={questionsData} />
        </div>
      )}
    </div>
  );
};

export default QuizPage;
