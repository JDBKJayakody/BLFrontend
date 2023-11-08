import React from 'react';
import { Layout, Row, Col } from 'antd';
import { WhatsAppOutlined, FacebookOutlined, InstagramOutlined, MailOutlined } from '@ant-design/icons';

const { Footer } = Layout;

interface SocialLink {
  icon: React.ReactNode;
  link: string;
}

const SocialLinks: SocialLink[] = [
  { icon: <FacebookOutlined />, link: 'https://www.facebook.com/buddhika.light' },
  { icon: <InstagramOutlined />, link: 'https://www.instagram.com/' },
  { icon: <WhatsAppOutlined />, link: 'https://www.instagram.com/' },
  { icon: <MailOutlined />, link: 'https://www.instagram.com/' }
];

const AppFooter: React.FC = () => {
  return (
    <Footer style={{ textAlign: 'center', backgroundColor: 'black', color: '#ff5e14', fontFamily: 'Courier New' }}>
      <Row justify="center">
        <Col xs={24} sm={24} md={12} lg={8} xl={6}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {SocialLinks.map((social, index) => (
              <li key={index} style={{ display: 'inline-block', margin: '0 30px', fontSize: '28px' }}>
                <a href={social.link} target="_blank" rel="noopener noreferrer">
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={24} sm={24} md={12} lg={8} xl={6}>
          <p style={{ fontFamily: 'Courier New', color: 'white' }}>© {new Date().getFullYear()} Use this link to connect with us via social media.</p>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <h2 style={{ fontSize: '25px', fontFamily: 'Courier New' }}>Find us</h2>
          <h2 style={{ fontSize: '18px', color: 'white', fontFamily: 'Courier New' }}>No 255,Anganpitiya, Padukka, Sri Lanka</h2>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <h2 style={{ fontSize: '25px', fontFamily: 'Courier New' }}>Call us</h2>
          <h2 style={{ fontSize: '18px', color: 'white', fontFamily: 'Courier New' }}>077 999 2576</h2>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <h2 style={{ fontSize: '25px', fontFamily: 'Courier New' }}>Mail us</h2>
          <h2 style={{ fontSize: '18px', color: 'white', fontFamily: 'Courier New' }}>buddhikalight@gmail.com</h2>
        </Col>
      </Row>
      <hr style={{ background: 'white', color: 'white', borderColor: 'white', height: '3px' }} />
      <Row justify="center" style={{ marginTop: '30px' }}>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
            src="/temp/dj icon.png"
            alt="logo"
            width={65}
            className="rounded-full"
            style={{ transition: 'transform 0.2s' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(0.9)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          />
        </Col>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
            src="/temp/event.png"
            alt="logo"
            width={90}
            className="rounded-full"
            style={{ transition: 'transform 0.2s' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(0.9)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          />
        </Col>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
            src="/temp/location.png"
            alt="logo"
            width={65}
            className="rounded-full"
            style={{ transition: 'transform 0.2s' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(0.9)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          />
        </Col>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
            src="/temp/home.png"
            alt="logo"
            width={65}
            className="rounded-full"
            style={{ transition: 'transform 0.2s' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(0.9)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          />
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={6} sm={6} md={6} lg={6} xl={6} style={{ fontFamily: 'Courier New', fontSize: '20px' }}>
          <a href="/Dj">DJ Artist</a>
        </Col>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} style={{ fontFamily: 'Courier New', fontSize: '20px' }}>
          <a href="/event">Events</a>
        </Col>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} style={{ fontFamily: 'Courier New', fontSize: '20px' }}>
          <a href="https://maps.app.goo.gl/UW9WoPwini1VoW6i6">Find</a>
        </Col>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} style={{ fontFamily: 'Courier New', fontSize: '20px' }}>
          <a href="/">Home</a>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: '30px', backgroundColor: '#C44A12' }}>
        <Col span={24} style={{ fontFamily: 'Courier New', fontSize: '25px', color: 'white' }}>
          <h1>Generator,Light & Open Stage Equipment Renting Service</h1>
        </Col>
      </Row>
    </Footer>
  );
};

export default AppFooter;
