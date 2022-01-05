import React from 'react'
import logo from './gmail-logo-2.png'
function header() {
  return (
    <div>
       <div className='header'>
         <img src={logo} className='gmail-logo' alt="logo" />
    
    <div className='right'>
      Username
    </div>
   </div>
      
    </div>
  )
}

export default header
