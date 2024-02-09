import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Terms.module.css";

function ScopePage() {
  return (
    <div>
      <h2>Scope</h2>
      <p>
        Scope determines the accessibility of variables, objects, and functions
        from different parts of the code. Here's an overview of different types
        of scope in JavaScript:
      </p>

      <Accordion defaultActiveKey="0" className="mb-3">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Global scope</Accordion.Header>
          <Accordion.Body>
            <p>Variables defined outside any function have global scope.</p>
            <pre className={styles.codeSnippet}>
              <code>{`var globalVar = "I'm global";`}</code>
            </pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Local scope</Accordion.Header>
          <Accordion.Body>
            <p>
              Variables declared within a function become local to the function.
            </p>
            <pre className={styles.codeSnippet}>
              <code>{`function myFunction() {\n  var localVar = "I'm local";\n}`}</code>
            </pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Block scope</Accordion.Header>
          <Accordion.Body>
            <p>
              `let` and `const` are scoped to the block in which they are
              defined.
            </p>
            <pre className={styles.codeSnippet}>
              <code>{`if (true) {\n  let blockScopedVar = "I'm block scoped";\n}`}</code>
            </pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Lexical scope</Accordion.Header>
          <Accordion.Body>
            <p>
              Inner functions have access to the variables of their outer scope.
            </p>
            <pre className={styles.codeSnippet}>
              <code>{`function outerFunction() {\n  var outerVar = "I'm outside!";\n  function innerFunction() {\n    console.log(outerVar);\n  }\n  innerFunction();\n}`}</code>
            </pre>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default ScopePage;
