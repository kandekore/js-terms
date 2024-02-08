import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>JavaScript Basics</h1>
      <nav>
        <ul>
          <li>
            <Link to="/variables">Variables</Link>
          </li>
        </ul>
      </nav>
      <p>
        Welcome to JavaScript Basics! This site is dedicated to teaching the
        fundamentals of JavaScript.
      </p>
    </div>
  );
}

export default HomePage;
