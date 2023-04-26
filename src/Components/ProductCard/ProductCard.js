import React from 'react'
import './ProductCard.css'

function ProductCard() {

    const productDetails = [{
        productId : '1',
        productPic : 'https://m.media-amazon.com/images/I/51Vf9GcpU6L._UL1140_.jpgy.jpg',
        productName : 'SHOES',
        brand : 'Jordan',
        productDescription : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse saepe voluptates tempora exercitationem, labore deleniti.',
        price : '10$',
        rating : 'Rating : 4'
    },
    {
        productId : '2',
        productPic : 'https://m.media-amazon.com/images/I/61GG-qbomcL._SX466_.jpg',
        productName : 'WATCH',
        brand : 'Titan',
        productDescription : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse saepe voluptates tempora exercitationem, labore deleniti.',
        price : '14$',
        rating : 'Rating : 4.5'
    },
    {
        productId : '3',
        productPic : 'https://cdn.lookastic.com/teal-jeans-original-2787297.jpg',
        productName : 'TROUSERS',
        brand : 'Red Tape',
        productDescription : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse saepe voluptates tempora exercitationem, labore deleniti.',
        price : '8$',
        rating : 'Rating : 3.8'
    }]

    function alertProductDetails (item) {
        alert(`Product ID is ${item.productId} which is ${item.productName} of brand ${item.brand} has of ${item.price} is added to the cart, Please proceed to Pay!`);

    } 

  return (
    <div className='container'>
    
      {
            productDetails.map(item => <div className='wrapper'>
                <img src = {item.productPic} alt='Product'/>
                <h6>{item.productId}</h6>
                <h3>{item.productName}</h3>
                <h4>{item.brand}</h4>
                <p>{item.productDescription}</p>
                <h2>{item.price}</h2>
                <p>{item.rating}</p>
                <button className = 'btn' onClick={()=>{alertProductDetails(item)}}>ADD TO CART</button>

            </div>)
        }   
    </div>
  )
}

export default ProductCard
