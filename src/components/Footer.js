import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css"; // Assuming you have some custom styles

const Footer = () => {
  return (
    <footer className={`${styles.footer} mt-auto py-3 bg-dark text-white`}>
      <Container>
        <Row>
          <Col className="text-center text-lg-start">
            © 2024 Your Company Name
          </Col>
          <Col className="text-center">
            <Link to="/privacy-policy" className="text-white">
              Privacy Policy
            </Link>
          </Col>
          <Col className="text-center text-lg-end">
            Follow us on:
            {/* Example social media links */}
            <a href="https://twitter.com" className="text-white ms-2">
              Twitter
            </a>
            <a href="https://facebook.com" className="text-white ms-2">
              Facebook
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
