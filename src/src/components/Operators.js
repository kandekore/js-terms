import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Terms.module.css";

function OperatorsPage() {
  return (
    <div>
      <h2>Operators</h2>
      <p>
        Operators in JavaScript are symbols that are used to perform operations
        on operands. Here are different types of operators:
      </p>

      <Accordion defaultActiveKey="0" className="mb-3">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Arithmetic</Accordion.Header>
          <Accordion.Body>
            <p>
              Perform mathematical operations like addition, subtraction,
              multiplication, and division.
            </p>
            <pre className={styles.codeSnippet}>
              <code>{`let sum = 10 + 5; // 15\nlet difference = 10 - 5; // 5\nlet product = 10 * 5; // 50\nlet quotient = 10 / 5; // 2`}</code>
            </pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Assignment</Accordion.Header>
          <Accordion.Body>
            <p>Assign values to variables.</p>
            <pre className={styles.codeSnippet}>
              <code>{`let x = 10;\nx += 5; // x is now 15`}</code>
            </pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Comparison</Accordion.Header>
          <Accordion.Body>
            <p>Compare two values and return a boolean value, true or false.</p>
            <pre className={styles.codeSnippet}>
              <code>{`let isEqual = (10 == 5); // false\nlet isGreater = (10 > 5); // true`}</code>
            </pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Logical</Accordion.Header>
          <Accordion.Body>
            <p>Used to determine the logic between variables or values.</p>
            <pre className={styles.codeSnippet}>
              <code>{`let result = (10 > 5) && (5 > 2); // true (both conditions are true)`}</code>
            </pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>Unary</Accordion.Header>
          <Accordion.Body>
            <p>Operate on a single operand.</p>
            <pre className={styles.codeSnippet}>
              <code>{`let x = 10;\nlet result = ++x; // x is now 11`}</code>
            </pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>Ternary (Conditional)</Accordion.Header>
          <Accordion.Body>
            <p>Assign a value to a variable based on a condition.</p>
            <pre className={styles.codeSnippet}>
              <code>{`let age = 20;\nlet canVote = (age >= 18) ? "Yes" : "No";`}</code>
            </pre>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default OperatorsPage;
