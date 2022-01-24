import React from 'react'
import redBus from './redBus.png'

function Content() {
  return (
    <div className='row'>
    <div className='vacc_part'>
      <div className='col-md-4 col-sm-12 col-xs-12'>
      <div className='left_image'>
          <img src={redBus} className='redBus'/>
      </div></div>
      <div className='col-md-4 col-sm-12 col-xs-12'>
      <div className='Right_content'>
          <p className='Right_para'> For information about<br></br>
          COVID-19 precautions kindly<br></br>
          visit the link below</p>
      </div></div>
    </div></div>
  )
}

export default Content
