import React from 'react'
import Footers from './footers'
import Navbars from './navbars'

function pagenotfound() {
  return (
    <div>
      <Navbars />
      <div class="col-md-10 col-12 mx-auto">
        <div style={{padding:"50px"}}>
          <h1>404 Error</h1>
          <h2>page not found</h2>
        </div>
      </div>
      <Footers />
    </div>
  )
}

export default pagenotfound
