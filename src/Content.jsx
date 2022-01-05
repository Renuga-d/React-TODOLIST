import React from 'react'
import redBus from './redBus.png'

function Content() {
  return (
    <div className='vacc_part'>
      <div className='left_image'>
          <img src={redBus} className='redBus'/>
      </div>
      <div className='Right_content'>
          <p className='Right_para'> For information about<br></br>
          COVID-19 precautions kindly<br></br>
          visit the link below</p>
      </div>
    </div>
  )
}

export default Content
