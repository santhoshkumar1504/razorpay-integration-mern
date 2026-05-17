import { Route, Routes } from "react-router-dom"
import Products from "./assets/components/Products"
import { products } from "./assets/data/products"
import Success from "./assets/components/Success"
function App() {
  return (
      <Routes>
        <Route path="/" element={<Products data={products}/>}/>
        <Route path="/paymentSuccess" element={<Success/>}/>
      </Routes>
  )
}

export default App
