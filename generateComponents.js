const fs = require("fs");
const path = require("path");

const categories = [
  "Variables",
  "Data Types",
  "Operators",
  "Control Flow",
  "Functions",
  "Scope",
  "Array Methods",
  "Array-Iteration",
  "Objects",
  "Promises",
  "Asynchronous JavaScript",
  "Error Handling",
  "JSON (JavaScript Object Notation)",
  "Modules",
  "DOM Manipulation",
  "Events",
  "AJAX",
  "Fetch API",
  "ES6+ Features",
  "Web APIs",
  "Libraries and Frameworks",
  "Debugging",
  "Security",
  "Advanced JavaScript Concepts",
  "Modern Development Practices",
  "Testing and Performance",
  "ES6+ Features Extended",
  "Others",
  "ArrayIteration",
  "Concepts",
  "ES6Features",
  "ES6FeaturesExtended"

];

const componentTemplate = (categoryName) => {
  const camelCaseCategoryName = categoryName.replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());

  return `
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Terms.module.css";
import { gql, useQuery } from "@apollo/client";

const GET_CATEGORY_BY_NAME = gql\`
  query GetCategoryByName($name: String!) {
    getCategoryByName(name: $name) {
      name
      description
      concepts {
        term
        description
        code
      }
    }
  }
\`;

function ${camelCaseCategoryName}Page() {
  const { loading, error, data } = useQuery(GET_CATEGORY_BY_NAME, {
    variables: { name: "${categoryName}" }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const categoryData = data.getCategoryByName;

  return (
    <div>
      <h2>{categoryData.name}</h2>
      <p>{categoryData.description}</p>

      <Accordion defaultActiveKey="0" className="mb-3">
        {categoryData.concepts.map((concept, index) => (
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

export default ${camelCaseCategoryName}Page;
`;
};

categories.forEach((category) => {
  const fileName = `${category.replace(/\s+/g, "")}.js`;
  const filePath = path.join(__dirname, "src/components/concepts", fileName);

  fs.writeFile(filePath, componentTemplate(category), (err) => {
    if (err) throw err;
    console.log(`${fileName} has been created successfully`);
  });
});
