import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "./Header.module.css";
import { useNavigate, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
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
    <Navbar
      expand="lg"
      sticky="top"
      className={`${styles.header} bg-body-tertiary`}
    >
      <Container fluid>
        <Navbar.Brand href="/" className={styles.brand}>
          JavaScript Concepts
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${styles.activeLink} nav-link` : "nav-link"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/variables"
              className={({ isActive }) =>
                isActive ? `${styles.activeLink} nav-link` : "nav-link"
              }
            >
              Variables
            </NavLink>
            <NavLink
              to="/data-types"
              className={({ isActive }) =>
                isActive ? `${styles.activeLink} nav-link` : "nav-link"
              }
            >
              Data Types
            </NavLink>
            <NavLink
              to="/operators"
              className={({ isActive }) =>
                isActive ? `${styles.activeLink} nav-link` : "nav-link"
              }
            >
              Operators
            </NavLink>
            <NavLink
              to="/control-flow"
              className={({ isActive }) =>
                isActive ? `${styles.activeLink} nav-link` : "nav-link"
              }
            >
              Control Flow
            </NavLink>
            <NavLink
              to="/functions"
              className={({ isActive }) =>
                isActive ? `${styles.activeLink} nav-link` : "nav-link"
              }
            >
              Functions
            </NavLink>
            <NavLink
              to="/scope"
              className={({ isActive }) =>
                isActive ? `${styles.activeLink} nav-link` : "nav-link"
              }
            >
              Scope
            </NavLink>
            <NavLink
              to="/arrays"
              className={({ isActive }) =>
                isActive ? `${styles.activeLink} nav-link` : "nav-link"
              }
            >
              Arrays
            </NavLink>

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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button variant="outline-success" type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
