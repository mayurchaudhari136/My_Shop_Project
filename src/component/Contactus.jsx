import React from 'react'
import './contactusstyle.css'
import Navbar from '../Navbar'

function Contactus() {
  return (
    <div>
      <Navbar/>
      <h1 className='head'> contact us</h1>
      
      <div className="contact">
  <div className="main">
    <h1>contact us </h1>
    <h2>you can connect with us by following option and is any query related us you can drop the massege</h2>
  </div>
  <div className="contactrow">
    <div className="contactcol1">
      <div className="contact-info">
        <div className="adress">
        <i class="fa-solid fa-address-book"></i>
        <h3>adress</h3>
        <p> At the front of motha bogda at post wadki taq ralegaon dist yavatmal pin code = 445308</p>
        </div>
        <div className="email">
        <i class="fa-solid fa-envelope"></i>
        <h3>Email</h3>
        <p>sunilkrushikendrawadki@gmail.com </p>
        </div>
        <div className="email">
        <i class="fa-solid fa-phone"></i>
        <h3>MOB NO</h3>
        <p>9049779636 </p>
        </div>
      </div>
    </div>
    <div className="contactcol2">
     <h3>send us massage</h3>
      <form>
        <div className="form-group">
        <input type='text' name="name" placeholder='enter your name'/>
        </div>
        
        <br/>
        <div className="form-group">
        <input type='email' name="name" placeholder='enter your email'/>
        </div>
       
        
        <br/>
        <div className="form-group">
        <textarea  placeholder='Enter your massage'></textarea>
        
        </div>
         
        
        <br />
        <button type='submit'>submit</button>

      </form>
    </div>
  </div>
</div>
      
    </div>
  )
}

export default Contactus
