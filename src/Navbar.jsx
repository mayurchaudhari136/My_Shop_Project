import React, { useState } from 'react'
import {NavLink} from "react-router-dom"
function Navbar() {
    let [set ,setstate]= useState(true)
    
  return (
    <>
    <nav className='Navbar-item'>
        <div className='Navbar-logo'></div>

        <div className="menu-icon" onClick={()=>setstate(!set)}>
        <i class={set ? "fa-solid fa-bars" :"fa-solid fa-times"}></i>
            
        </div>
        <ul className={set ?"Nav-menu":"Nav-menu active"}>
            
            <li><NavLink to='/' className="menu-link"><i class="fa-solid fa-house"></i>HOME</NavLink></li>
            <li><NavLink to='/ABOUT 'className="menu-link"><i class="fa-regular fa-address-card"></i>ABOUT US</NavLink></li>
            <li><NavLink to='/PRODUCT'className="menu-link"><i class="fa-solid fa-box-open"></i>PRODUCT</NavLink></li>
            <li><NavLink to='/CONTACTUS'className="menu-link"><i class="fa-solid fa-phone"></i>CONTACT US</NavLink></li>
            <li><NavLink to='/STAFF'className="menu-link"><i class="fa-solid fa-people-group"></i>STAFF</NavLink></li>
            <li><NavLink to='/productresult'className="menu-link"><i class="fa-solid fa-search"></i>PRODUCT RESULT</NavLink></li>



        </ul>

    </nav>
    
    </>
    
       
  )
}

export default Navbar
