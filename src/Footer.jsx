import React from 'react'
import f from './f.png'
import Instagram from './Instagram logo.jpg'
import twit from './twit.png'
function Footer() {
  return (
    <div>
      <div className="left1">
       Copyrights 2020
     </div>
     <div className="right1">
       <ul>
         <li><img src={f} className='images_footer' /></li>
         <li><img src={Instagram}  className='images_footer' /></li>
         <li><img src={twit} className='images_footer' /></li>
       </ul>
     </div>
    </div>
  )
}

export default Footer
