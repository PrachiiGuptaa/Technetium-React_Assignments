import React from "react";
import './Data.css'

 function Data (props) {
    const productDetails = props.productDetails;
    
    function Cart() {
        const productId = productDetails.productId;
        const productName = productDetails.productName;
        const productBrand = productDetails.Brand;
        const productPrice = productDetails.Price;
        alert (`Product ${productId}, which is ${productName} of brand ${productBrand} of price ${productPrice} is added in the cart, please proceed to pay!!!`);
    }

    return (
        <div className="data">
            <img src={productDetails.productPic} alt='Product' />
            <h3>{productDetails.productName}</h3>
            <h2>{productDetails.Brand}</h2>
            <p>{productDetails.productDescription}</p>
            <p>{`Price : ${productDetails.Price}`}</p>
            <p>{`Rating : ${productDetails.Rating}/5`}</p>
            <button className="btn" onClick={Cart}>
                ADD TO CART
            </button>
        </div>
    )

 }

 export default Data;