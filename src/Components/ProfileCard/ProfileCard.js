import React from 'react'
import Data from '../Data/Data'
import '../Data/Data.css'

function ProfileCard({image, designation, name, jobDescription}) {
  return (
    <div className='container'>
      <Data
      image="https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurvy&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light"
      designation="FRONTEND DEVELOPER"
      name="Prachi Gupta"
      jobDescription="Design and develop user-friendly websites and applications using HTML, CSS, JavaScript and React."
      />

      <Data
      image="https://avataaars.io/?avatarStyle=Circle&topType=LongHairBob&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=ShirtScoopNeck&clotheColor=Black&eyeType=Default&eyebrowType=Default&mouthType=Twinkle&skinColor=Light"
      designation="DOCTOR"
      name="Shweta Oberoi"
      jobDescription="Examine patients, order and interpret tests, prescribe medication, and provide medical advice and treatment."
      />

      <Data
      image="https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurly&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=CollarSweater&clotheColor=Black&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
      designation="ENGINEER"
      name="Prarthanaa Khurana"
      jobDescription="Design, develop, implement, and maintain systems, structures, machines, or processes to solve problems."/>
    </div>
  )
}

export default ProfileCard;
