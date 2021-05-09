import React from 'react'
import Footers from './footers'
import Maps from './maps'
import Navbars from './navbars'

function About() {
  return (
    <div>
      <Navbars />
        <div class="col-md-10 col-12 mx-auto">
        <h1 class="align-items-center" style={{alignSelf:"center",fontSize:"60px",justifySelf:"center",justifyItems:"center",alignItems:"center",paddingLeft:"10px"}}>About us</h1>
        <hr style={{borderTop:" 10px dashed #8c8b8b;"}}></hr> 
        <h1 style={{paddingLeft:"10px"}}>work in progress else you can connect us at </h1>
        <Maps />
        
        </div>
      <Footers />

    </div>
  )
}

export default About
