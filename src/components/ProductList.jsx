import React from "react";
import ProductDetails from "./ProductDetails";

const ProductList = () => {
    const products = [
         {
            id:1,
            name:"Laptop",
            price:20000,
            image:"https://m.media-amazon.com/images/I/81+SKGgJ9yL._AC_UL480_FMwebp_QL65_.jpg", 
            description:"Lenovo IdeaPad Slim 3 Intel Core i3 12th Gen 15.6 (39.62cm) FHD Thin & Light Laptop" 
         },
         {
            id:2,
            name:"Smartphone",
            price:30000,
            image: "https://m.media-amazon.com/images/G/31/img24/Wireless/Samsung/17thFeb/M35_5G_Buybox_580x675.png",
            description:"Samsung Galaxy M35 5G (Thunder Grey,6GB RAM,128GB Storage" 
         }
    ]

  function handleAddToCart(name){
     alert(`product ${name} added to Cart`);
  }
    return(
        <>
          <div className="container">
            <h2>Product List</h2>
            {products.map((product)=>(
                <ProductDetails productObj={product}  addToCart={handleAddToCart} />
            ))}            
          </div>
        </>
    )
}

export default ProductList;