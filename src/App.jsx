import { useState } from 'react'
import Header from './Header.jsx'
import './App.css'
import img from './img.jpg'
import f from './f.png'
import Instagram from './Instagram logo.jpg'
import twit from './twit.png'
import Content from './Content.jsx'

function App() {
  

  return (
   
    <div className='container'>
      <Header />
   <div className='div2'>
       <img src={img} className='cares_image' />
   </div>
 <p>We bring you stories along with graduate from the many drivers and <br></br>
 helpers of our partner bus operators, whose lives changed bacause of all<br></br>
 your contributions.</p>
  <p>But as the lockdown continues, so do their struggles. And we hope you<br></br>
  join our efforts in delivering essentials along with hope to them and their<br></br>
  families. Let's hear from the drivers.</p>  
       <Content />
          <div className="footer">
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
   </div>
   
  )
}

export default App
