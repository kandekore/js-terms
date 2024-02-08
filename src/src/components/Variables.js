import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Terms.module.css";

function VariablesPage() {
  return (
    <div>
      <h2>Variables</h2>
      <p>
        Variables in JavaScript are used to store data values. JavaScript has
        three ways to declare variables:
      </p>

      <Accordion defaultActiveKey="0" className="mb-3">
        <Accordion.Item eventKey="0">
          <Accordion.Header>var</Accordion.Header>
          <Accordion.Body>
            <p>Declares a variable, optionally initializing it to a value.</p>
            <pre className={styles.codeSnippet}>
              <code>var name = 'John';</code>
            </pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>let</Accordion.Header>
          <Accordion.Body>
            <p>
              Declares a block-scoped, local variable, optionally initializing
              it to a value.
            </p>
            <pre className={styles.codeSnippet}>
              <code>let age = 30;</code>
            </pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>const</Accordion.Header>
          <Accordion.Body>
            <p>Declares a block-scoped, read-only named constant.</p>
            <pre className={styles.codeSnippet}>
              <code>const birthday = '01/01/1990';</code>
            </pre>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default VariablesPage;
