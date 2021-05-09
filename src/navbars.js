import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './navbars.css';

function navbars() {
  return (
    
<nav class="navbar navbar-expand-lg" style={{color:"#00264d"}}>
  <div class="container">
    <p class="" href="/" style={{fontSize:"25px",color:"white",fontFamily:"sans-serif",fontSmooth:"10px"}}
      > Shree Khandagiri Udayagiri Siddha Khshetra</p>
   
      <ul class="navbar-nav ms-auto align-items-center">
        <li class="nav-item">
          <a class="nav-link mx-2  align-items-center" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2 align-items-center" href="/rooms">Rooms</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2 align-items-center" href="/gallery">Gallery</a>
        </li>
        <li class="nav-item ms-3">
          <a class="nav-link mx-2  align-items-center" href="/about">About us</a>
        </li>
      </ul>
    
  </div>
</nav>

  
  );
}

export default navbars
