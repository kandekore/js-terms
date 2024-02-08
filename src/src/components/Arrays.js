import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Terms.module.css"; // Assuming this CSS module contains necessary styles

function ArraysPage() {
  return (
    <div>
      <h2>Arrays</h2>
      <p>
        Arrays in JavaScript are used to store multiple values in a single
        variable. Here are some common array methods and iteration techniques:
      </p>

      <Accordion defaultActiveKey="0" className="mb-3">
        {/* Array Methods */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>Array Methods</Accordion.Header>
          <Accordion.Body>
            <p>
              <strong>push()</strong>: Adds one or more elements to the end of
              an array and returns the new length of the array.
            </p>
            <pre className={styles.codeSnippet}>
              <code>{`const fruits = ["apple", "banana"];\nfruits.push("orange"); // ["apple", "banana", "orange"]`}</code>
            </pre>

            <p>
              <strong>pop()</strong>: Removes the last element from an array and
              returns that element.
            </p>
            <pre className={styles.codeSnippet}>
              <code>{`fruits.pop(); // Removes "orange" from fruits`}</code>
            </pre>

            <p>
              <strong>shift()</strong>: Removes the first element from an array
              and returns that removed element.
            </p>
            <pre className={styles.codeSnippet}>
              <code>{`fruits.shift(); // Removes "apple" from fruits`}</code>
            </pre>

            <p>
              <strong>unshift()</strong>: Adds one or more elements to the
              beginning of an array and returns the new length of the array.
            </p>
            <pre className={styles.codeSnippet}>
              <code>{`fruits.unshift("strawberry"); // Adds "strawberry" at the start`}</code>
            </pre>

            <p>
              <strong>splice()</strong>: Changes the contents of an array by
              removing or replacing existing elements and/or adding new elements
              in place.
            </p>
            <pre className={styles.codeSnippet}>
              <code>{`fruits.splice(1, 0, "mango"); // Inserts "mango" at index 1`}</code>
            </pre>

            <p>
              <strong>slice()</strong>: Returns a shallow copy of a portion of
              an array into a new array object selected from start to end (end
              not included) without modifying the original array.
            </p>
            <pre className={styles.codeSnippet}>
              <code>{`fruits.slice(1, 2); // Returns ["banana"]`}</code>
            </pre>

            <p>
              <strong>concat()</strong>: Is used to merge two or more arrays.
              This method does not change the existing arrays but instead
              returns a new array.
            </p>
            <pre className={styles.codeSnippet}>
              <code>{`const vegetables = ["carrot", "potato"];\nconst food = fruits.concat(vegetables);`}</code>
            </pre>
          </Accordion.Body>
        </Accordion.Item>

        {/* Array Iteration */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>Array Iteration</Accordion.Header>
          <Accordion.Body>
            <p>
              <strong>forEach()</strong>: Executes a provided function once for
              each array element.
            </p>
            <pre className={styles.codeSnippet}>
              <code>{`fruits.forEach(fruit => console.log(fruit));`}</code>
            </pre>

            <p>
              <strong>map()</strong>: Creates a new array populated with the
              results of calling a provided function on every element in the
              calling array.
            </p>
            <pre className={styles.codeSnippet}>
              <code>{`const lengths = fruits.map(fruit => fruit.length);`}</code>
            </pre>

            <p>
              <strong>filter()</strong>: Creates a new array with all elements
              that pass the test implemented by the provided function.
            </p>
            <pre className={styles.codeSnippet}>
              <code>{`const longFruits = fruits.filter(fruit => fruit.length > 5);`}</code>
            </pre>

            <p>
              <strong>reduce()</strong>: Executes a reducer function (that you
              provide) on each element of the array, resulting in a single
              output value.
            </p>
            <pre className={styles.codeSnippet}>
              <code>{`const totalLength = fruits.reduce((acc, fruit) => acc + fruit.length, 0);`}</code>
            </pre>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default ArraysPage;
