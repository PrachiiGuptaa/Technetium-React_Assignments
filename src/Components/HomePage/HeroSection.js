import React from 'react'
import styles from './HeroSection.module.css'

function HeroSection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
      <h1>Welcome to the Website!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className={styles.btn}>Learn More</button>
      </div>
      <div className={styles.image}>
      <img src='https://img.freepik.com/free-photo/rpa-concept-with-blurry-hand-touching-screen_23-2149311914.jpg?w=740&t=st=1683578007~exp=1683578607~hmac=56265ae79347dbb24c892be39c4a3e33d66baa5ebf0bb456bed464fb89ec6cf9' alt='RandomImage'/>
      </div>
    </div>
  )
}

export default HeroSection
