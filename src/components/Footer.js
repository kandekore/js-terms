import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import mern from "../images/mern.png";

const Footer = () => {
  return (
    <footer className={`${styles.footer} mt-auto py-3 bg-dark text-white`}>
      <Container>
        <Row>
          <Col className="text-center text-lg-start">© 2024 D Kandekore</Col>
          <Col className="text-center">
            <img src={mern} className="mern" />
            <p>Built using the M.E.R.N Stack</p>
          </Col>
          <Col className="text-center text-lg-end">
            <a
              href="https://twitter.com/kandekore"
              target="_blank"
              className="text-white ms-2"
            >
              Twitter
            </a>
            <a
              href="https://darrenk.uk/blog"
              target="_blank"
              className="text-white ms-2"
            >
              Blog
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
