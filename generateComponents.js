const fs = require("fs");
const path = require("path");

const categories = [
  "Variables",
  "Data Types",
  "Operators",
  "Control Flow",
  "Functions",
  "Scope",
  "Arrays",
  "Objects",
  "Promises",
  "Asynchronous JavaScript",
  "Error Handling",
  "JSON",
  "Modules",
  "DOM Manipulation",
  "Events",
  "AJAX",
  "Fetch API",
  "ES6+ Features",
  "Web APIs",
  "Libraries and Frameworks",
  "Debugging",
  "Security" // Add or remove categories as needed
];

const componentTemplate = (category) => `
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Terms.module.css";
import { useQuery, gql } from "@apollo/client";

const GET_${category.toUpperCase().replace(/\s+/g, "_")}_CONCEPTS = gql\`
  query GetConceptsByCategory {
    getConceptsByCategory(category: "${category}") {
      term
      description
      code
    }
  }
\`;

function ${category.replace(/\s+/g, "")}Page() {
  const { loading, error, data } = useQuery(GET_${category
    .toUpperCase()
    .replace(/\s+/g, "_")}_CONCEPTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>${category}</h2>
      <p>Description about ${category}.</p>

      <Accordion defaultActiveKey="0" className="mb-3">
        {data.getConceptsByCategory.map((concept, index) => (
          <Accordion.Item eventKey={String(index)} key={index}>
            <Accordion.Header>{concept.term}</Accordion.Header>
            <Accordion.Body>
              <p>{concept.description}</p>
              {concept.code && (
                <pre className={styles.codeSnippet}>
                  <code>{concept.code}</code>
                </pre>
              )}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

export default ${category.replace(/\s+/g, "")}Page;
`;

categories.forEach((category) => {
  const fileName = `${category.replace(/\s+/g, "")}.js`;
  const filePath = path.join(__dirname, "src/components/concepts", fileName);

  fs.writeFile(filePath, componentTemplate(category), (err) => {
    if (err) throw err;
    console.log(`${fileName} has been created successfully`);
  });
});
