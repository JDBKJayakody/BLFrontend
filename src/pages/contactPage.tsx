import Header from "../componant/common/header";
import { Outlet } from "react-router-dom";
import { Layout, Col,Row } from 'antd';
import AppFooter from "../componant/common/footer";
import React, { useState } from 'react';



const ContactPage = (props: any) => {
  const [showMap, setShowMap] = useState(false);

  const loadMap = () => {
    setShowMap(true);
  };
  return (
    <>
      <Header />
      <Row>
      <Col span={24}>
     <div>
     <img src='http://www.donbur.co.uk/gb-en/images/uploads/contact-background.jpg' style={{width:'100%', height:'10%'}} />
     </div>
     </Col>
     </Row>
  
     <Row style={{marginTop:'50px'}}>
     <Col span={16} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
     <div>
     <h1 style={{ color:'#ff5e14',fontSize: '40px',fontFamily: 'Courier New',marginLeft:'25px'}}>Get in Touch with Buddhika Light Pvt Ltd..</h1>
      <h1 style={{ fontSize: '18px',fontFamily: 'Courier New',marginLeft:'20px'}}>
        We  are here to make your experience with generator, lighting and sound rentals effortless and enjoyable. Whether you have  any   questions, specific requests or need expert advice, our team is ready to assist you. 
        Our expertized  staff is just a call or message away, eager to support you find the perfect options for your needs. We look forward to hearing from you and ensuring your events shine brightly with our support.</h1>
      
      </div>
      </Col>

      

      <Col span={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
     <div>
     <img src='https://i.pinimg.com/originals/8f/82/b2/8f82b2e0595336c008b233e93dd1c846.png' style={{width:'70%', height:'10%'}} />
      </div>
      </Col>
      
     </Row>

     <Row style={{marginTop:'50px'}}>
     <Col span={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      
      </Col>

      <Col span={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      
      </Col>

      <Col span={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      
      </Col>

      <Col span={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      
      </Col>
     
     </Row>

     <Row style={{marginTop:'20px'}}>
     <Col xs={24} sm={12} md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div>
      <img src="https://icon-library.com/images/mail-address-icon/mail-address-icon-4.jpg" alt="logo"  width={90} className="rounded-full" style={{ transition: 'transform 0.2s',marginLeft:'100px' }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(0.9)';}}
        onMouseLeave={(e) => {e.currentTarget.style.transform = 'scale(1)'; }} />
      <h1 style={{ fontSize: '20px',fontFamily: 'Courier New',marginLeft:'15px'}}>No:255,Buddhika Light (Pvt) Ltd</h1>
      <p style={{ fontSize: '18px',fontFamily: 'Courier New',marginLeft:'15px'}}>Anganpitiya, Padukka,<br></br>Sri Lanka</p>

      </div>
      </Col>
      <Col xs={24} sm={12} md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div>
      <img src="https://www.freeiconspng.com/uploads/icon-address-----------21.png" alt="logo"  width={90} className="rounded-full" style={{ transition: 'transform 0.2s' }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(0.9)';}}
        onMouseLeave={(e) => {e.currentTarget.style.transform = 'scale(1)'; }} />
      <button onClick={loadMap} style={{color:'#ff5e14', fontSize: '25px',fontFamily: 'Courier New'}}>Load Map</button>
    </div>
      </Col>

      <Col xs={24} sm={12} md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div>
      <img src="https://cdn141.picsart.com/304038526013211.png" alt="logo"  width={90} className="rounded-full" style={{ transition: 'transform 0.2s',marginLeft:'30px' }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(0.9)';}}
        onMouseLeave={(e) => {e.currentTarget.style.transform = 'scale(1)'; }} />
      <h1 style={{ fontSize: '25px',fontFamily: 'Courier New'}}>077 999 2576</h1>
      <p style={{ fontSize: '18px',fontFamily: 'Courier New'}}><a href="https://www.facebook.com/buddhika.light">Face Book</a></p>

      </div>
      </Col>

      <Col xs={24} sm={12} md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div>
      <img src="https://webstockreview.net/images/contact-icon-png-1.png" alt="logo"  width={90}  style={{ transition: 'transform 0.2s',marginInlineStart:'60px' }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(0.9)';}}
        onMouseLeave={(e) => {e.currentTarget.style.transform = 'scale(1)'; }} />
      <h1 style={{ fontSize: '25px',fontFamily: 'Courier New'}}>077 999 2576 </h1>
      <a href="www.buddhikalight@gmail.com">
      <p style={{ fontSize: '18px',fontFamily: 'Courier New'}}>buddhikalight@gmail.com</p>
      </a>
      

      </div>
      </Col>
     </Row>


     <Row style={{marginTop:'50px',marginBottom:'50px'}}>
     <Col span={24} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
     <div>
        {showMap ? (
         
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.3290623325197!2d80.11872227499589!3d6.85110149314722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3ad3400000023%3A0xa6ea50748c4f58fc!2sBuddhika%20Light%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1698811224111!5m2!1sen!2slk"
            width="1500"
            height="600"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{
              border: '2px solid #000', // Set your custom border size and color
              borderRadius: '10px'       // Set your custom border radius
            }}
          ></iframe>
        
        ) : null}
      </div>
      </Col>
      
     </Row>
     <AppFooter />
    </>
  );
};

export default ContactPage;