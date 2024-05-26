import React from 'react'
import "./boys.css"
import Navbar from '../Navbar'
import Forms from './Forms'


function Staff() {
  return (
    
    <div>
      <Navbar />
      <h1 className='head'>Staff</h1>
      <div className="our-powers">
        <div className="container1">
          <div className="imgform">
            <img src='images/sahil.jpeg' alt='farm' />
          </div>
        
          <h2>Mr. Sahil chimurkar</h2>
          <h4>Stock manager</h4>

          
      
          <p> He is working now in stock management . he can handle department that which product we should stock . which product has shortage expiry and find out the product which are expired</p>
          <div className="icon">
          <i class="fa-brands fa-facebook" ></i>
          <i class="fa-brands fa-instagram" ></i>
          <i class="fa-brands fa-whatsapp" ></i>



            
          </div>
         
          
         
        </div>
        <div className="container1">
          <div className="imgform">
            <img src='images/atharv.jpeg' alt='farm' />
          </div>
        
          <h2>Mr. Atharv nahate</h2>
          <h4>Billing operator</h4>

          
      
          <p> He is working in sale invoice billing department . he can find out out customer outstanding and print out the statement of acount.he also send invoice bill on customer wats-apps </p>
          <div className="icon">
          <i class="fa-brands fa-facebook" ></i>
          <i class="fa-brands fa-instagram" ></i>
          <i class="fa-brands fa-whatsapp" ></i>



            
          </div>
         
          
         
        </div>
        <div className="container1">
          <div className="imgform">
            <img src='images/yash.jpeg' alt='farm' />
          </div>
        
          <h2>Mr. Yash gotefode</h2>
          <h4>Customer adviser</h4>

          
      
          <p> He is providing a survice to customer that which pestiside should sparay at diffrent pest attack . which ferilizer should give the plant at diffrent doses.he also suggest which seed is suitable on their land</p>
          <div className="icon">
          <i class="fa-brands fa-facebook" ></i>
          <i class="fa-brands fa-instagram" ></i>
          <i class="fa-brands fa-whatsapp" ></i>



            
          </div>
         
          
         
        </div>

    

      </div>
      

      
      


     

<Forms/>

      
    </div>
  )
}

export default Staff
