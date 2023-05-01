import React, {useState, useRef, useEffect} from 'react';
import './ImageComponent.css'

function ImageComponent() {
    const [imageUrl, setImageUrl] = useState('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg');
    const buttonRef = useRef(null);
  
    const handleClick = () => {
      const images = [
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        'https://cdn.pixabay.com/photo/2016/11/04/21/34/beach-1799006__480.jpg',
        'https://love-shayari.co/wp-content/uploads/2021/10/sun-rise.jpg',
        'https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg',
      ];
  
      const currentImageUrl = imageUrl;
      const currentIndex = images.indexOf(currentImageUrl);
      const nextIndex = (currentIndex + 1) % images.length;
      const nextImageUrl = images[nextIndex];
  
      setImageUrl(nextImageUrl);
    };

    useEffect(() => {
        console.log(buttonRef.current);
      }, []);
  
    return (
      <div>
        <img src={imageUrl} alt="placeholder" className="image"/><pre/>
        <button onClick={handleClick} ref={buttonRef}>
          Change Image
        </button>
      </div>
    );
  }
  
  export default ImageComponent;