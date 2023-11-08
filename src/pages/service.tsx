import { Card, Row, Col, Layout } from "antd";
import { Outlet } from "react-router-dom";
import Header from "../componant/common/header";
import AppFooter from "../componant/common/footer";
import { useState } from 'react';

const { Content } = Layout;

const Service = (props: any) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <Layout>
      <Header />
      <Content>
        <Row>
          <Col span={24}>
            <div>
              <img src='/temp/service1.jpg' style={{ width: '100%', height: "27.5vw" }} />
            </div>
          </Col>
        </Row>

        <Row style={{ backgroundColor: '#dcdcdc' }}>
          <Col span={24} style={{ textAlign: 'center' }}>
            <div>
              <b><h1 style={{ fontSize: '30px', fontFamily: 'Courier New', color: 'black',marginTop:"20px",marginBottom:'20px', marginLeft:'15px', marginRight:'15px' }}>We bring the convenience to your doorstep.
                Simply request our services, and we'll ensure that everything you need for your event from generators to lighting and more,
                is delivered to your location.</h1></b>
            </div>
          </Col>
        </Row>

        <Row style={{ marginBlock: '50px' }}>
          <Col xs={24} sm={12} md={6}>
            <Card style={{ backgroundColor: '#e9f5f9', marginBlock: '15px', marginLeft: '15px', marginRight: '15px', borderColor: '#071418', borderWidth: '3px', borderRadius: '15px', height: '470px' }}>
              <b><h1 style={{ fontSize: '30px', fontFamily: 'Courier New', textAlign: 'center' }}>Generators</h1></b>
              <img src="https://purepng.com/public/uploads/large/purepng.com-generatorgeneratorelectricity-generationmechanical-energyelectrical-powerpower-source-170152835040481zdy.png" alt="logo" style={{ transition: 'transform 0.2s', width: '70%', height: '70%', marginLeft: '25px', marginBottom: '15px' }} />
              <h2 style={{marginTop:'42px',fontSize: '16px'}}>Our generators are the backbone of reliable power supply for your mega events in SriLanka.
                These robust machines come in different capacities to meet your event's power needs.
                </h2>
            </Card>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Card style={{ backgroundColor: '#e9f5f9', marginBlock: '15px', marginLeft: '15px', marginRight: '15px', borderColor: '#071418', borderWidth: '3px', borderRadius: '15px', height: '470px' }}>
              <b><h1 style={{ fontSize: '30px', fontFamily: 'Courier New', textAlign: 'center' }}>Lights</h1></b>
              <img src="https://www.pngarts.com/files/3/Stage-Lights-PNG-Picture.png" alt="logo" style={{ transition: 'transform 0.2s', width: '70%', height: '70%', marginLeft: '25px', marginBottom: '15px' }} />
              <h2 style={{marginTop:'1px',fontSize: '16px'}}>We offer a spectrum of lighting options from vivid color displays .
                You can choose variety of ways to brighten up your venue and create the right mood.</h2>
            </Card>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Card style={{ backgroundColor: '#e9f5f9', marginBlock: '15px', marginLeft: '15px', marginRight: '15px', borderColor: '#071418', borderWidth: '3px', borderRadius: '15px', height: '470px' }}>
              <b><h1 style={{ fontSize: '30px', fontFamily: 'Courier New', textAlign: 'center' }}>Sounds</h1></b>
              <img src="https://www.pngmart.com/files/17/Audio-Speakers-DJ-PNG-Transparent-Image.png" alt="logo" style={{ transition: 'transform 0.2s', width: '50%', height: '50%', marginLeft: '50px', marginBottom: '15px' }} />
              <h2 style={{fontSize: '16px'}}> Immerse your audience in an auditory wonderland with our premium sound systems.
                We provide a complete range of audio equipment, including high-quality speakers, microphones etc.</h2>
            </Card>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Card style={{ backgroundColor: '#e9f5f9', marginBlock: '15px', marginLeft: '15px', marginRight: '15px', borderColor: '#071418', borderWidth: '3px', borderRadius: '15px', height: '470px' }}>
              <b><h1 style={{ fontSize: '30px', fontFamily: 'Courier New', textAlign: 'center' }}>Stages </h1></b>
              <img src="https://pluspng.com/img-png/png-stage-welcome-to-dunicon-outdoor-stage-png-358.png" alt="logo" style={{ transition: 'transform 0.2s', width: '70%', height: '70%', marginLeft: '25px', marginBottom: '15px' }} />
              <h2 style={{marginTop:'63px',fontSize: '16px'}}>Our stages are versatile platforms for your event's performances and presentations.
                We offer stages in different  sizes and configurations to accommodate your specific needs.
                </h2>
            </Card>
          </Col>
        </Row>

        <Row style={{ backgroundColor: '#dcdcdc' }}>
          <Col span={24} style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '50px' }}>
              <b><h1 style={{ fontSize: '50px', fontFamily: 'Courier New', color: 'black' }}>Dj Artist</h1></b>
              <h1 style={{ fontSize: '18px', fontFamily: 'Courier New', marginLeft: '15px', marginRight: '15px' }}>Enhance your event with the sounds of our talented DJ artist. You can elevate your experience by hiring our DJ artist , ensuring that your guests dance the night away to the hottest beats and tunes.</h1>
            </div>
          </Col>
        </Row>

      </Content>
      <AppFooter />
    </Layout>
  );
};

export default Service;
