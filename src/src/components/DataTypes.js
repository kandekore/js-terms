import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Terms.module.css";

function DataTypesPage() {
  return (
    <div>
      <h2>Data Types</h2>
      <p>
        JavaScript provides different data types to hold various types of
        values. Here are some of the basic data types:
      </p>

      <Accordion defaultActiveKey="0" className="mb-3">
        <Accordion.Item eventKey="0">
          <Accordion.Header>String</Accordion.Header>
          <Accordion.Body>
            <p>Represents textual data.</p>
            <pre className={styles.codeSnippet}>
              <code>let greeting = "Hello, world!";</code>
            </pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Number</Accordion.Header>
          <Accordion.Body>
            <p>
              Represents numerical data, both integers and floating-point
              numbers.
            </p>
            <pre className={styles.codeSnippet}>
              <code>let age = 30;</code>
            </pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Boolean</Accordion.Header>
          <Accordion.Body>
            <p>
              Represents a logical entity and can have two values: true and
              false.
            </p>
            <pre className={styles.codeSnippet}>
              <code>let isAdult = true;</code>
            </pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Object</Accordion.Header>
          <Accordion.Body>
            <p>
              Represents instances of keyed collections and more complex
              entities.
            </p>
            <pre className={styles.codeSnippet}>
              <code>{`const person = {\n  firstName: "John",\n  lastName: "Doe",\n  age: 30\n};`}</code>
            </pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>Array</Accordion.Header>
          <Accordion.Body>
            <p>Represents a list-like collection of items.</p>
            <pre className={styles.codeSnippet}>
              <code>{`let numbers = [1, 2, 3, 4, 5];`}</code>
            </pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>Null</Accordion.Header>
          <Accordion.Body>
            <p>Represents the intentional absence of any object value.</p>
            <pre className={styles.codeSnippet}>
              <code>{`let empty = null;`}</code>
            </pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header>Undefined</Accordion.Header>
          <Accordion.Body>
            <p>Indicates that a variable has not been assigned a value.</p>
            <pre className={styles.codeSnippet}>
              <code>{`let und;`}</code>
            </pre>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default DataTypesPage;
