import React from 'react'
import './Data.css'

function Data({productDetails, alertFunction}) {
    
    const{
        productId,
        productPic,
        productName,
        brand,
        productDescription,
        price,
        rating 
    } = productDetails

  return (
    <div className='data'>
      <img src = {productPic} alt='Product'/>
      <h6>{productId}</h6>
      <h3>{productName}</h3>
      <h4>{brand}</h4>
      <p>{productDescription}</p>
      <h2>{price}</h2>
      <p>{rating}</p>
      <button className = 'btn'onClick={alertFunction}>ADD TO CART</button>
    </div>
  )
}

export default Data
