import React from 'react';
import './Data.css';

function Data({image, designation, name, jobDescription}){
    function NameAlert() {
        alert(name)
    }
    return(
        <div className='data'>
         <img src={image} alt='Profile'/>
         <p className='designation'>{designation}</p>
         <h2>{name}</h2>
         <p className='jobDescription'>{jobDescription}</p>
         <button className='btn'onClick={NameAlert}>See More</button>
        </div>
    )
}

export default Data
