import React from 'react'
import styles from './HomePage.module.css'
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/quizpage');
    }

  return (
    <div className={styles.container}>
        <button onClick={handleClick} className={styles.buttonStyle}>Start Quest !</button>
    </div>
  )
}

export default HomePage