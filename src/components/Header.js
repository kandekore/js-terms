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
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search-results?query=${encodeURIComponent(searchQuery)}`);
    setSearchQuery("");
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

            <NavDropdown title="More" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/objects">Objects</NavDropdown.Item>
              <NavDropdown.Item href="/promises">Promises</NavDropdown.Item>
              <NavDropdown.Item href="/asynchronous-javascript">
                Asynchronous JavaScript
              </NavDropdown.Item>
              <NavDropdown.Item href="/error-handling">
                Error Handling
              </NavDropdown.Item>
              <NavDropdown.Item href="/json">JSON</NavDropdown.Item>
              <NavDropdown.Item href="/modules">Modules</NavDropdown.Item>
              <NavDropdown.Item href="/dom-manipulation">
                DOM Manipulation
              </NavDropdown.Item>
              <NavDropdown.Item href="/events">Events</NavDropdown.Item>
              <NavDropdown.Item href="/ajax">AJAX</NavDropdown.Item>
              <NavDropdown.Item href="/fetch-api">Fetch API</NavDropdown.Item>
              <NavDropdown.Item href="/es6-features">
                ES6+ Features
              </NavDropdown.Item>
              <NavDropdown.Item href="/web-apis">Web APIs</NavDropdown.Item>
              <NavDropdown.Item href="/libraries-and-frameworks">
                Libraries and Frameworks
              </NavDropdown.Item>
              <NavDropdown.Item href="/debugging">Debugging</NavDropdown.Item>
              <NavDropdown.Item href="/security">Security</NavDropdown.Item>
              <NavDropdown.Item href="/advanced-javascript-concepts">
                Advanced JavaScript Concepts
              </NavDropdown.Item>
              <NavDropdown.Item href="/modern-development-practices">
                Modern Development Practices
              </NavDropdown.Item>
              <NavDropdown.Item href="/testing-and-performance">
                Testing and Performance
              </NavDropdown.Item>
              <NavDropdown.Item href="/es6-features-extended">
                ES6+ Features Extended
              </NavDropdown.Item>
            </NavDropdown>
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
