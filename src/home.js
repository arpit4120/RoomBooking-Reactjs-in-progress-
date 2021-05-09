import React from 'react'
import Footers from './footers'
import Imagecro from './Imagecro'
import Navbars from './navbars';
import './home.css';
import {MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn} from 'mdb-react-ui-kit';
import Maps from './maps';


function home() {
  return (
    
      <div >
        <Navbars />
          <div class="col-md-10 col-12 mx-auto" style={{ textColor:"#00264d",paddingTop:"10px",marginBottom:"20px"}}>
            <Imagecro />
            <MDBCard style={{innerWidth:"80%",marginTop:"20px"}} >
              <MDBCardBody>
              <MDBCardTitle style={{color:"#00264d",fontSize:"50px"}}>About temple</MDBCardTitle>
              <hr style={{borderTop:" 10px dashed #8c8b8b;"}}></hr>
              <MDBCardText style={{fontSize:"20px"}}>
                  From here 500 sons of King Jatharad attained Nirwan and hence this is a Siddha Kshetra. The small twin hills Khandagiri and Udaygiri have 23 Caves and 5 Digambar Jain Temples. Khandgiri has 18 caves which are huge and worth see (All of them). Khandagiri has 5 caves, 4 temples and 1 Dharamshala with a Temple. Lord Mahavir's samasharan had come to this place. Both the hills are quite small in size (40 meters) with 125 steps in Total and worth visit. Google Map shows the exact location of the Twin hills.
              </MDBCardText>
              <div style={{justifyContent:"center",justifySelf:"center",alignItems: "center"}}>
              <MDBBtn className="buttondiv" color="primary" href="/rooms" >Room Booking</MDBBtn>
              </div>
              </MDBCardBody>
            </MDBCard>
            <Maps />

            
          </div>
        <Footers />
      </div>
  )
}

export default home
