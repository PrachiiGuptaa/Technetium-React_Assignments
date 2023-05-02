import React, {useState, useEffect} from 'react';
import './FetchDogImage.css'

function DogImage(){
    const [image, setImage] = useState("")

    useEffect(() => {
        const fetchDogImage = async () => {
            try{
                const response = await fetch("https://dog.ceo/api/breeds/image/random")
                const data = await response.json()
                setImage(data.message);
            }
            catch(error){
                console.log(error);
            }
        };
        fetchDogImage();
    }, []);

    return(
       <> 
       {image && <img src={image} alt="Random Dog" className='image'/>}
       </>
    )
}

export default DogImage;