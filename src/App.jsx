import './App.css'
import Welcome from './components/welcome'
import Employee from './components/Employee'
import ProductCategory from './components/ProductCategory'
import ProductList from './components/ProductList'
import Test from '../../state-manag/src/components/Test'

function App() {
   const categories = ["Electronics","Clothing","Books","Home & Kitchen"];
   const productDetails = {productName:"Laptop",price:40000,isAvailable:false}
  return (
    <>
      <h1>My First APP</h1>
      <h2>App Component</h2>
    
     {/* <Welcome /> */}
   {/* <Test></Test> */}

    {/* <Employee name="John" city="Newyork" />

    <Employee name="David" city="LosAngles" /> */}


{/* <ProductCategory categoriesArr={categories} productDetails={productDetails} /> */}

<ProductList />

  </>
  )
}

export default App
