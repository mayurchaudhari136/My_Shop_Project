import React from 'react'
import './aboutstyle.css'
import Navbar from '../Navbar'

function Aboutus() {
  return (<>
  <Navbar/>
  
    <div className='about-main'>
    <h1 className='head'>About us</h1>
      
      <div className="container-1">
        <div className="col1">
          <img src="./images/anil.png" alt="anilbhau" />
        </div>
      
        <div className="col2">
          <h2>Mr. Anil P. Chaudhari</h2>
          <h3>CEO of sunil k. k.</h3>
          <p> Earlier i was working in other shop as a helper . i was strugle more than my capacity . at that time i was thinking why i do all the effort for other. then i was decided to step forward and make my own company thats the name is sunil keushi kendra . and i finally succees in my dream . </p>
          <div className="icon">
          <i class="fa-brands fa-facebook" ></i>
          <i class="fa-brands fa-instagram" ></i>
          <i class="fa-brands fa-whatsapp" ></i>



            
          </div>
        </div>
        
      </div>
      <div className="container-1">
        <div className="col1">
          <img src="./images/abhi.jpeg" alt="abhibhau" />
        </div>
      
        <div className="col2">
          <h2>Mr. Abhi  A. Chaudhari</h2>
          <h3>co-operative partnar of sunil k. k.</h3>
          <p> when i am 16 year old then i was understand what should do for connect more and more customer . after i am 23 my father giving me all the rsponsibily and he was always teach me that how to handle the customer and  what should i do for customer satisfaction </p>
          <div className="icon">
          <i class="fa-brands fa-facebook" ></i>
          <i class="fa-brands fa-instagram" ></i>
          <i class="fa-brands fa-whatsapp" ></i>



            
          </div>
        </div>
        
      </div>
      <div className="container-1">
        <div className="col1">
          <img src="./images/mayu.jpeg" alt="mayu" />
        </div>
      
        <div className="col2">
          <h2>Mr. Mayur A. Chaudhari</h2>
          <h3>Team Leader</h3>
          <p>this company give me a lot of knowlage . At the age of 23 i learn how to convert the customer .what point should know when deal with customer. our  business  gives many opprtunities for fresher student   </p>
          <div className="icon">
          <i class="fa-brands fa-facebook" ></i>
          <i class="fa-brands fa-instagram" ></i>
          <i class="fa-brands fa-whatsapp" ></i>



            
          </div>
        </div>
        
      </div>
      
      
        
      
    </div>
    </>
  )
}

export default Aboutus
