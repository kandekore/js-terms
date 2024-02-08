import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Terms.module.css";

function FunctionsPage() {
  return (
    <div>
      <h2>Functions</h2>
      <p>
        Functions are blocks of code designed to perform a particular task. Here
        are different ways to define functions in JavaScript:
      </p>

      <Accordion defaultActiveKey="0" className="mb-3">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Function declaration</Accordion.Header>
          <Accordion.Body>
            <p>Defines a function with the specified parameters.</p>
            <pre className={styles.codeSnippet}>
              <code>{`function greet(name) {\n  return "Hello, " + name + "!";\n}`}</code>
            </pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Function expression</Accordion.Header>
          <Accordion.Body>
            <p>Defines a function inside an expression.</p>
            <pre className={styles.codeSnippet}>
              <code>{`const greet = function(name) {\n  return "Hello, " + name + "!";\n};`}</code>
            </pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Arrow function</Accordion.Header>
          <Accordion.Body>
            <p>Provides a concise syntax to define functions.</p>
            <pre className={styles.codeSnippet}>
              <code>{`const greet = name => "Hello, " + name + "!";`}</code>
            </pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>
            IIFE (Immediately Invoked Function Expression)
          </Accordion.Header>
          <Accordion.Body>
            <p>Runs as soon as it is defined.</p>
            <pre className={styles.codeSnippet}>
              <code>{`(function() {\n  console.log("Hello, World!");\n})();`}</code>
            </pre>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default FunctionsPage;
