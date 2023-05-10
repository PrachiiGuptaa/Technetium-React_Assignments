import React from 'react'
import CardList from '../Molecules/CardList'

const CardContainer = ({cards}) => {
    return(
     <div>
      <CardList cards={cards}/>
     </div>
    )
}
export default CardContainer