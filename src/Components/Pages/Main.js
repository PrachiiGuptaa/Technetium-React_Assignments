import React from 'react'
import CardContainer from '../Organisms/CardContainer'

const Main = () => {
    const cards = [
        {
            id: 1,
            image: "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairBob&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
            name: 'Prachi Gupta',
            designation: 'Frontend Developer',
            experience: '2 years of experience'
        },
        {
            id: 2,
            image: "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairCurvy&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=CollarSweater&clotheColor=Black&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
            name: 'Niharika Singh',
            designation: 'UI/UX Designer',
            experience: '5 years of experience'
        },
        {
            id: 3,
            image: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light',
            name: 'Lakshay Verma',
            designation: 'Engineer',
            experience: '1 years of experience'
        },
        {
            id: 4,
            image: 'https://avataaars.io/?avatarStyle=Transparent&topType=LongHairNotTooLong&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=ShirtVNeck&clotheColor=Black&eyeType=Default&eyebrowType=Default&mouthType=Twinkle&skinColor=Pale',
            name: 'Prerna Khanna',
            designation: 'IAS Officer',
            experience: '3 years of experience'
        },
        {
            id: 5,
            image: 'https://avataaars.io/?avatarStyle=Transparent&topType=LongHairMiaWallace&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=ShirtVNeck&clotheColor=Blue03&eyeType=Default&eyebrowType=Default&mouthType=Twinkle&skinColor=Light" alt="Shweta Oberoi',
            name: 'Shweta Oberoi',
            designation: 'Doctor',
            experience: '5 years of experience'
        },
        {
            id: 6,
            image: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurly&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=CollarSweater&clotheColor=Black&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light',
            name: 'Prarthanaa Singhania',
            designation: 'Software Engineer',
            experience: '6 months of experience'
        },
        {
            id: 7,
            image: 'https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light',
            name: 'Mihika Verma',
            designation: 'Actress',
            experience: '5 years of experience'
        },
        {
            id: 8,
            image: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortWaved&accessoriesType=Prescription02&hairColor=Red&facialHairType=Blank&clotheType=ShirtScoopNeck&clotheColor=Black&eyeType=Surprised&eyebrowType=Default&mouthType=Smile&skinColor=Tanned',
            name: 'Rishi Oberoi',
            designation: 'Chartered Accountant',
            experience: '7 years of experience'
        },
        {
            id: 9,
            image: 'https://avataaars.io/?avatarStyle=Transparent&topType=Hat&accessoriesType=Round&facialHairType=Blank&facialHairColor=Platinum&clotheType=GraphicShirt&clotheColor=Blue01&graphicType=Bear&eyeType=Default&eyebrowType=Default&mouthType=Twinkle&skinColor=Tanned',
            name: 'Rohit Khurrana',
            designation: 'UI Designer',
            experience: '6 years of experience'
        },
        {
            id: 10,
            image: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortRound&accessoriesType=Prescription02&hairColor=Blonde&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Happy&eyebrowType=SadConcernedNatural&mouthType=Default&skinColor=Yellow',
            name: 'Sidhhartha Garg',
            designation: 'Doctor',
            experience: '5 years of experience'
        },
        {
            id: 11,
            image: 'https://avataaars.io/?avatarStyle=Transparent&topType=NoHair&accessoriesType=Prescription01&facialHairType=MoustacheMagnum&facialHairColor=Black&clotheType=ShirtCrewNeck&clotheColor=PastelBlue&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light',
            name: 'John Doe',
            designation: 'Actor',
            experience: '4 years of experience'
        },
        {
            id: 12,
            image: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesar&accessoriesType=Blank&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=ShirtCrewNeck&clotheColor=Blue03&eyeType=Default&eyebrowType=Default&mouthType=Twinkle&skinColor=Light',
            name: 'Manish Agarwal',
            designation: 'Designer',
            experience: '3 years of experience'
        },
    ]
  return (
    <div>
      <CardContainer cards={cards}/>
    </div>
  )
}

export default Main
