import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';


function Imagecro() {
  return (
    <div>
      <MDBCarousel showIndicators showControls fade>
      <MDBCarouselInner>
        <MDBCarouselItem itemId={0}>
          <MDBCarouselElement src='https://lh3.googleusercontent.com/mVEIWAFh0ImXonblCtuGYbnlh7mV1sRdR5_y58x6L7gxnGCGKFFqLLw27lWvNpX-1ElUB4nTHCikJyYZ5d91fymslt8DW1fHCubORSQ4eXxudrq_Y-XhVXxzrIHJJNT1lsGaC6H9Jgo=w2400?source=screenshot.guru"> <img src="https://lh3.googleusercontent.com/mVEIWAFh0ImXonblCtuGYbnlh7mV1sRdR5_y58x6L7gxnGCGKFFqLLw27lWvNpX-1ElUB4nTHCikJyYZ5d91fymslt8DW1fHCubORSQ4eXxudrq_Y-XhVXxzrIHJJNT1lsGaC6H9Jgo=w600-h315-p-k' alt='...' height="500px"/>
          <MDBCarouselCaption>
            <h5>भुवनेश्वर जैन समाज द्वारा हर किसी को जय जिनेंद्र</h5>
            <p>-Odisha Tirth Khshetra Committee</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem itemId={1}>
          <MDBCarouselElement src='https://lh3.googleusercontent.com/OMdOaO8V9SHyLT6wICA7GL0BSTaNekgi8F3U_3nGV79Cz4K-TxcjVakyX2sYBg67gIJlkUTF8v882CKofiNAYlZ5EUXiGd48kklfBrZQx__F-bfpSFgDEC3beu09omEdclGHKpqjJ0g=w2400' alt='...' height="500px" />
          <MDBCarouselCaption>
            <h5> दो चेहरे इंसान कभी नहीं भूलता एक मु१किल में साथ देने वाला और दूसरा मु१किल में साथ छोड़ने वाला   </h5>
            <p> -श्री 108 सॏभग्य सागर जी महाराज</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem itemId={2}>
          <MDBCarouselElement src='https://lh3.googleusercontent.com/H8Dg7WuSfdizJZB6ylcNTILKwcvbnnDV1C0RGmrN_zWjm-Yj3ep39ZDqei9V2Ekj-nUrqw3ePmBnP_8fyYQB2_HHNl4Yt4u2shmzuu4eyjOt59XYOkbQ9lWf3ctwJSeSrjLEN26om5c=w2400' alt='...' height="500px"/>
          <MDBCarouselCaption>
            <h5>भुवनेश्वर जैन समाज में आपका स्वागत है</h5>
            <p></p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>

    </div>
  )
}

export default Imagecro
