
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './component/Home'
import Staff from './component/Staff'
import Contactus from './component/Contactus'
import Product from './component/Product'
import Aboutus from './component/Aboutus'
import Productresult from './component/Product result'


function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/ABOUT' element={<Aboutus/>}/>
      <Route path='/PRODUCT' element={<Product/>}/>
      <Route path='/CONTACTUS' element={<Contactus/>}/>
      <Route path='/STAFF' element={<Staff/>}/>
      <Route path='/productresult' element={<Productresult/>}/>
      
    </Routes>
    
    
    
    
    
    

  
    
   
    </>
  )
    
     
}

export default App
