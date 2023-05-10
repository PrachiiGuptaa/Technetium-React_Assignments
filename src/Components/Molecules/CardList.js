import React from 'react'
import styles from './CardList.module.css'
import Card from '../Atoms/Card'

const CardList = ({cards}) => {
  return (
    <div className={styles.scrollbar}>
      {cards.map((card, index)=>(
        <Card
        key={index}
        image={card.image}
        name={card.name}
        designation={card.designation}
        experience={card.experience}/>
      ))}
    </div>
  )
}

export default CardList
