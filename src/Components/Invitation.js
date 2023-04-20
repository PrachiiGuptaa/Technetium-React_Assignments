import React from 'react'

function Invitation({subject, to, name, content, people, venue}) {
  return (
    <>
    <h1 className='heading'><u>Invitation</u></h1>
    <p>Subject : {subject}</p>
    <p>To : {to}</p>
    <p>Hi, {name}</p> 
    <p>I am having a {content} next Friday at my Home. Would you like to come? It will be fun. Lots of people from my school are coming. You know some of them - {people}.</p>
    <p>My house is behind our school, near {venue}.</p>
    <p>I hope you will come and see you soon.</p>
    <p>From,</p>
    <p>{name}</p>
    </>
  )
}

export default Invitation
