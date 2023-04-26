import React from 'react'
import './ProductCard.css'
import Data from '../Data/Data'

function ProductCard() {

    const productOne = {
        productId : '1',
        productPic : 'https://m.media-amazon.com/images/I/51Vf9GcpU6L._UL1140_.jpgy.jpg',
        productName : 'SHOES',
        brand : 'Jordan',
        productDescription : '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse saepe voluptates tempora exercitationem, labore deleniti.',
        price : '10$',
        rating : 'Rating : 4'
    }

    const productTwo = {
        productId : '2',
        productPic : 'https://m.media-amazon.com/images/I/61GG-qbomcL._SX466_.jpg',
        productName : 'WATCH',
        brand : 'Titan',
        productDescription : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse saepe voluptates tempora exercitationem, labore deleniti.',
        price : '14$',
        rating : 'Rating : 4.5'
    }

    const productThree = {
        productId : '3',
        productPic : 'https://cdn.lookastic.com/teal-jeans-original-2787297.jpg',
        productName : 'TROUSERS',
        brand : 'Red Tape',
        productDescription : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse saepe voluptates tempora exercitationem, labore deleniti.',
        price : '8$',
        rating : 'Rating : 3.8'
    }

    const productFour = {
        productId : '4',
        productPic : 'https://img.freepik.com/premium-photo/blue-hoodie-mockup-sweatshirt-with-pocket-insulated-white-background_124507-29139.jpg?w=2000',
        productName : 'HOODIE',
        brand : 'Puma',
        productDescription : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse saepe voluptates tempora exercitationem, labore deleniti.',
        price : '12$',
        rating : 'Rating : 4.8'
    }

    const productFive = {
        productId : '5',
        productPic : 'https://mediamodifier.com/blog/wp-content/uploads/2023/02/024a07bc0217e804ffeda5f96ed49e08_mm-showroom-image-1024x683.jpg',
        productName : 'T-SHIRT',
        brand : 'Allen Solly',
        productDescription : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse saepe voluptates tempora exercitationem, labore deleniti.',
        price : '18$',
        rating : 'Rating : 4.8'
    }

    function alertProductOne () {
        alert(`Product ID is ${productOne.productId} which is ${productOne.productName} of brand ${productOne.brand} has of ${productOne.price} is added to the cart, Please proceed to Pay!`);

    } 
    
    function alertProductTwo () {
        alert(`Product ID is ${productTwo.productId} which is ${productTwo.productName} of brand ${productTwo.brand} has of ${productTwo.price} is added to the cart, Please proceed to Pay!`);

    } 

    function alertProductThree () {
        alert(`Product ID is ${productThree.productId} which is ${productThree.productName} of brand ${productThree.brand} has of ${productThree.price} is added to the cart, Please proceed to Pay!`);

    } 

    function alertProductFour () {
        alert(`Product ID is ${productFour.productId} which is ${productFour.productName} of brand ${productFour.brand} has of ${productFour.price} is added to the cart, Please proceed to Pay!`);

    } 

    function alertProductFive () {
        alert(`Product ID is ${productFive.productId} which is ${productFive.productName} of brand ${productFive.brand} has of ${productFive.price} is added to the cart, Please proceed to Pay!`);

    } 

  return (
    <div className='wrapper'>
      <Data
      productDetails={productOne}
      alertFunction={alertProductOne}
      />

      <Data
      productDetails={productTwo}
      alertFunction={alertProductTwo}
      />

      <Data
      productDetails={productThree}
      alertFunction={alertProductThree}
      />
   
      <Data
      productDetails={productFour}
      alertFunction={alertProductFour}
      />

      <Data
      productDetails={productFive}
      alertFunction={alertProductFive}
      />
    </div>
  )
}

export default ProductCard
