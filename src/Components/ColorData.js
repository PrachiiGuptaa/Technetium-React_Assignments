import React from 'react'
import Invitation from './Invitation'

function ColorData() {
  const subject = "Birthday party Invitation"
  const to = "jaGdish@gmail.com" 
  const name = "jaGdish"
  const content = "birthday party"
  const people = "Ritu, Saurabh, Kartik"
  const venue = "Green field Avenue"

  return (
    <div>
        <Invitation 
        subject = {subject}
        to = {to}
        name = {name}
        content = {content}
        people = {people}
        venue = {venue}
        />      
    </div>
  )
}

export default ColorData;
