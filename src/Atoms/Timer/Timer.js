import React, { useEffect } from 'react';
import styles from './Timer.module.css';

const Timer = ({ timeRemaining, setTimeRemaining, submitTest }) => {
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prevTime => {
        if (prevTime <= 1) {
          clearInterval(timer);
          submitTest();
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatTime = timeInSeconds => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return <div className={styles.timer}>Time Remaining: {formatTime(timeRemaining)}</div>;
};

export default Timer;
