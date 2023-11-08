import React from 'react';
import { Row, Col } from 'antd';
import Header from '../componant/common/header';
import AppFooter from '../componant/common/footer';
import Revew from './admin/Revew';

const AboutPage = (props: any) => {
  return (
    <>
      <Header />
      <Row>
        <Col span={24}>
          <div>
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipPwR-3Ey_NZBmzvN73yvc-ItxY2q3pcIQWCSQCN=s1360-w1360-h1020"
              style={{ width: '100%', height: '27.5vw' }}
            />
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: '50px' }}>
       
        <Col xs={24} sm={18}>
        <b><h1 style={{ fontSize: '32px', fontFamily: 'Courier New',marginLeft:'25px' }}>About Us</h1></b>
          <p style={{ fontSize: '18px', marginTop: '10px', fontFamily: 'Courier New', textAlign: 'justify',marginLeft:'20px' }}>
            Welcome to Buddhika Light Pvt Ltd, your trusted source for generator, lighting, and sound rental solutions. 
            Our passion is to transform ordinary gatherings into extraordinary spectacles which leave your guests in awe. 
            By delivering power, illumination, and audio excellence, we have been a leading partner in the industry within the past few years.
             Our commitment to quality and customer satisfaction has made us the go-to choice for mega events, businesses, and individuals looking for reliable equipment to make their occasions truly memorable. 
             We not only provide a powerful blend of generators, captivating lighting, and crystal clear sound, but we also offer unmatched expertise to ensure your event shines.
            You can explore our extensive range of products and services and let us be the power behind your success.
          </p>
        </Col>
        <Col xs={24} sm={6}>
          <img
            src="https://www.pngmart.com/files/About-Us-PNG.png"/>
        </Col>
      </Row>
      <Row style={{ marginTop: '60px' }}>
        <Col xs={24} sm={12} md={8}>
          <b><h1 style={{ fontSize: '32px', fontFamily: 'Courier New', marginLeft:'40px' }}>Vision</h1></b>
          <p style={{ fontSize: '18px', fontFamily: 'Courier New', textAlign: 'justify', marginLeft:'25px' }}>
          "Empowering Creativity through Seamless Event Experiences" At Buddhika Light Pvt Ltd company, we envision Sri Lanka where every event,
           from intimate gatherings to grand productions, is brought to life with unmatched energy, precision, and artistry.
          </p>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <img src="/temp/b.png"/>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <b><h1 style={{ fontSize: '32px', fontFamily: 'Courier New' }}>Mission</h1></b>
          <p style={{ fontSize: '18px', fontFamily: 'Courier New', textAlign: 'justify',marginRight:'25px' }}>
            Our mission is to be the cornerstone of exceptional event experiences. We are committed to providing seamless access to top-tier generators, lights,
            and sound equipment, enabling event organizers and artists to bring their creative visions to life.
          </p>
        </Col>
      </Row>
     
      <Row style={{ marginBottom: '30px' ,marginTop:'50px'}}>
        <Col xs={24}>
          <b><h1 style={{ fontSize: '32px', fontFamily: 'Courier New',marginLeft:'40px',fontStyle:'bolt' }}>Our History</h1></b>
          <p style={{ fontSize: '18px', fontFamily: 'Courier New', textAlign: 'justify', marginLeft:'25px', marginRight:'25px' ,}}>
            Inheriting a history of more than 15 years, "Buddhika Light" is moving forward to meet the ever-expanding market's needs and goals. It is my belief that we have protected the trust of our customers and the trust of all the employees who were members of the Prasara family to the best of our ability. My aim is to lead the institute forward by increasing the quality of the products through research studies using new technology. We invite you to keep the trust you have placed in us so far and continue to join hands with us.
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
          <div>
            <Revew />
          </div>
        </Col>
      </Row>
      <AppFooter />
    </>
  );
};

export default AboutPage;