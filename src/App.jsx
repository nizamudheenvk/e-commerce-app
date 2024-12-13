import { Routes,Route } from 'react-router-dom'
import './App.css'
import Cart from './Pages/Cart'
import Home from './Pages/Home'
import View from './Pages/View'
import ProductView from './Pages/ProductView'
import Wishlists from './Pages/Wishlists'




function App() {

  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/view' element={<View/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/:id/productview' element={<ProductView/>}/>
    <Route path='/wishlist' element={<Wishlists/>}/>
  
    </Routes>
     
    </>
  )
}

export default App
