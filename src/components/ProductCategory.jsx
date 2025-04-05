import React from "react";

function ProductCategory(props){
 console.log(props);
 const {categoriesArr,productDetails } = props;

 categoriesArr = [];
 const styles = {
  width:"18rem"
 }
return(
  <>
    <h2>Categories</h2>
    {/* <ul>
       <li>{props.categoriesArr[0]}</li> 
       <li>{props.categoriesArr[1]}</li> 
       <li>{props.categoriesArr[2]}</li>    
    </ul>   */}

    <ul>
       {categoriesArr.map((el,index)=>(
          <li key={index}>{el}</li>
       ))}

    </ul>

  <hr />
  <div className="card" style={styles}>
  <img src="https://th.bing.com/th?id=OIP.Cb4yDyTxPq8OHQAy7VDaigHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" class="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{productDetails.productName}</h5>
    <p className="card-text">{productDetails.price}.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
  

<button type="button" className="btn btn-primary">Primary</button>
<button type="button" className="btn btn-secondary">Secondary</button>

  </>
)
}

export default ProductCategory