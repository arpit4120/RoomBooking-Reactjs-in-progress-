import React from 'react';
import './footers.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

function footers() {
  return (
    <MDBFooter className='text-center text-lg-left'  style={{ backgroundColor: '#00264d' }} >
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase' style={{color:"white"}}> Shree Khandagiri Udayagiri Siddha Khshetra</h5>

            <p style={{color:"white"}}>
              Under Bengal Bihar Odisha Tirth Khshetra Committee
            </p>
            <img src="https://images-na.ssl-images-amazon.com/images/I/71LC9W7TBQL._AC_SY355_.jpg" alt="" width="100px" height="100px" />
          </MDBCol>

          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase' style={{color:"white"}}>Links</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='/' style={{color:"white"}}>
                  home
                </a>
              </li>
              <li>
                <a href='/gallery'  style={{color:"white"}}>
                  Gallery
                </a>
              </li>
              <li>
                <a href='/rooms' style={{color:"white"}}>
                  Rooms
                </a>
              </li>
              <li>
                <a href='/about' style={{color:"white"}}>
                  About us
                </a>
              </li>
            </ul>
          </MDBCol>

        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: '#001a33' }}>
        &copy; {new Date().getFullYear()}{' '}
        <a className='text-light' href='https://www.linkedin.com/in/arpit-kumar-jain-b80b74113/' target="blank">
         Created By Arpit kumar jain
        </a>
      </div>
    </MDBFooter>
    
  
  )
}

export default footers
