import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

function NavScrollExample() {
  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query
  const navigate = useNavigate(); // Hook for navigation

  // Handler for form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    navigate(`/search-results?query=${encodeURIComponent(searchQuery)}`); // Navigate to search results page
    setSearchQuery(""); // Optional: Clear the search input after navigation
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary header">
      <Container fluid className={styles.header}>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/variables">Variables</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/data-types">Data Types</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/operators">Operators</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/control-flow">Control Flow</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/functions">Functions</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/scope">Scope</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/arrays">Arrays</Link>
            </Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/variables">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSearchSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchQuery} // Bind state to input
              onChange={(e) => setSearchQuery(e.target.value)} // Update state on input change
            />
            <Button variant="outline-success" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
