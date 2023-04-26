import React from 'react';
import Data from '../Data/Data';
import './ProductCard.css'

function ProductCard() {

  const productDetailsList = [
{
    productId : "1",
    productPic : "https://m.media-amazon.com/images/I/51Vf9GcpU6L._UL1140_.jpgy.jpg" ,
    productName : "SHOES" ,
    Brand : "Jordan",
    productDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse saepe voluptates tempora exercitationem, labore deleniti.", 
    Price : "10$",
    Rating : "4",
 },
 {
    productId : "2",
    productPic : "https://m.media-amazon.com/images/I/61GG-qbomcL._SX466_.jpg" ,
    productName : "WATCH" ,
    Brand : "Titan",
    productDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse saepe voluptates tempora exercitationem, labore deleniti.", 
    Price : "14$",
    Rating : "4.5",
 },
 {
    productId : "3",
    productPic : "https://cdn.lookastic.com/teal-jeans-original-2787297.jpg" ,
    productName : "TROUSERS" ,
    Brand : "Red Tape",
    productDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse saepe voluptates tempora exercitationem, labore deleniti.", 
    Price : "8$",
    Rating : "3.8",
 },
 {
    productId : "4",
    productPic : "https://img.freepik.com/premium-photo/blue-hoodie-mockup-sweatshirt-with-pocket-insulated-white-background_124507-29139.jpg?w=2000",
    productName : "HOODIE" ,
    Brand : "Puma",
    productDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse saepe voluptates tempora exercitationem, labore deleniti.", 
    Price : "12$",
    Rating : "4.8",
 },
 {
    productId : "5",
    productPic : "https://mediamodifier.com/blog/wp-content/uploads/2023/02/024a07bc0217e804ffeda5f96ed49e08_mm-showroom-image-1024x683.jpg",
    productName : "T-SHIRT" ,
    Brand : "Allen Solly",
    productDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse saepe voluptates tempora exercitationem, labore deleniti.", 
    Price : "18$",
    Rating : "4.8",
 },
];
 
  return (
    <div className="wrapper">
      {productDetailsList.map((productDetails) => (
        <Data
        key = {productDetails.productId} productDetails = {productDetails}/>
      ))}
    </div>
  );
}

export default ProductCard;
