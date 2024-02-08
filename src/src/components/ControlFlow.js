import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Terms.module.css";

function ControlFlowPage() {
  return (
    <div>
      <h2>Control Flow</h2>
      <p>
        Control flow statements are used to specify the order in which the code
        executes based on certain conditions or loops.
      </p>

      <Accordion defaultActiveKey="0" className="mb-3">
        <Accordion.Item eventKey="0">
          <Accordion.Header>if statement</Accordion.Header>
          <Accordion.Body>
            <p>Executes a block of code if a specified condition is true.</p>
            <pre className={styles.codeSnippet}>
              <code>{`if (condition) {\n  // code to execute if condition is true\n}`}</code>
            </pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>else statement</Accordion.Header>
          <Accordion.Body>
            <p>Executes a block of code if the condition is false.</p>
            <pre className={styles.codeSnippet}>
              <code>{`if (condition) {\n  // code if condition is true\n} else {\n  // code to execute if condition is false\n}`}</code>
            </pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>else if statement</Accordion.Header>
          <Accordion.Body>
            <p>
              Specifies a new condition to test, if the first condition is
              false.
            </p>
            <pre className={styles.codeSnippet}>
              <code>{`if (condition1) {\n  // code to execute if condition1 is true\n} else if (condition2) {\n  // code to execute if condition2 is true\n} else {\n  // code to execute if both condition1 and condition2 are false\n}`}</code>
            </pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>switch statement</Accordion.Header>
          <Accordion.Body>
            <p>
              Selects one of many code blocks to be executed based on the value
              of a variable or an expression.
            </p>
            <pre className={styles.codeSnippet}>
              <code>{`switch(expression) {\n  case x:\n    // code block\n    break;\n  case y:\n    // code block\n    break;\n  default:\n    // code block\n}`}</code>
            </pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>for loop</Accordion.Header>
          <Accordion.Body>
            <p>Loops through a block of code a specified number of times.</p>
            <pre className={styles.codeSnippet}>
              <code>{`for (let i = 0; i < 5; i++) {\n  // code block to be executed\n}`}</code>
            </pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>while loop</Accordion.Header>
          <Accordion.Body>
            <p>
              Loops through a block of code as long as a specified condition is
              true.
            </p>
            <pre className={styles.codeSnippet}>
              <code>{`while (condition) {\n  // code block to be executed\n}`}</code>
            </pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header>do-while loop</Accordion.Header>
          <Accordion.Body>
            <p>
              Also loops through a block of code as long as a specified
              condition is true but tests the condition after the execution of
              the code block.
            </p>
            <pre className={styles.codeSnippet}>
              <code>{`do {\n  // code block to be executed\n}\nwhile (condition);`}</code>
            </pre>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default ControlFlowPage;
