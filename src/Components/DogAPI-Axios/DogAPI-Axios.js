import React, {useState} from 'react';
import axios from 'axios';
import './DogAPI-Axios.css'

export default function DogAPI(){
    const [image, setImage] = useState("")

    const handleClick = async () => {
        try {
            const response = await axios.get('https://dog.ceo/api/breeds/image/random')
            setImage(response.data.message)
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <>
        {image && <img src={image} alt="Random Dog" className="image"/>}
        <button onClick={handleClick} className='btn'> Fetch Image</button>
        </>
    )
}
 