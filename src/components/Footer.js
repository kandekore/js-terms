import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import styles from "./Footer.module.css";
import mern from "../images/mern.png";
import { SocialIcon } from 'react-social-icons'


const Footer = () => {
  return (
    <footer className={`${styles.footer} mt-auto py-3 bg-dark text-white`}>
      <Container>
        <Row>
          <Col className="text-center text-lg-start">© 2024 <a
              href="https://darrenk.uk/blog"
              target="_blank"
              className="text-white ms-2"
              rel="noreferrer"
            >D Kandekore</a></Col>
          <Col className="text-center">
            <img src={mern} className="mern" alt="MERN Stack"/>
            <p>Built using the M.E.R.N Stack</p>
          </Col>
          <Col className="text-center text-lg-end">
          
            
            <SocialIcon fgColor="#f0db4f" bgColor="#000" rel="noreferrer" network="github"  target="_blank" url="https://github.com/kandekore"/>
            <SocialIcon fgColor="#f0db4f" bgColor="#000" rel="noreferrer" network="x"  target="_blank" url="https://x.com/kandekore"/>
            <SocialIcon fgColor="#f0db4f" bgColor="#000" rel="noreferrer"  network="linkedin"  target="_blank" url="https://www.linkedin.com/in/dkandekore"/>

          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
