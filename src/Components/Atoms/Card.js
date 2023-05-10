import React from 'react'
import styles from './Card.module.css'

const Card = ({image, name, designation, experience}) => {
  return(
    <div>
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image}/>
      <h1 className={styles.name}>{name}</h1>
      <h4 className={styles.designation}>{designation}</h4>
      <p className={styles.experience}>{experience}</p>
    </div>
    </div>

  )
}

export default Card