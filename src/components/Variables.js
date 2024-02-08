import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Terms.module.css";
import { useQuery, gql } from "@apollo/client";

// GraphQL query to fetch variables concepts
const GET_VARIABLES_CONCEPTS = gql`
  query GetVariablesConcepts {
    getConceptsByCategory(category: "Variables") {
      term
      description
      codeSnippet
    }
  }
`;

function VariablesPage() {
  const { loading, error, data } = useQuery(GET_VARIABLES_CONCEPTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>Variables</h2>
      <p>
        Variables in JavaScript are used to store data values. JavaScript has
        three ways to declare variables:
      </p>

      <Accordion defaultActiveKey="0" className="mb-3">
        {data.getConceptsByCategory.map((concept, index) => (
          <Accordion.Item eventKey={String(index)} key={index}>
            <Accordion.Header>{concept.term}</Accordion.Header>
            <Accordion.Body>
              <p>{concept.description}</p>
              <pre className={styles.codeSnippet}>
                <code>{concept.codeSnippet}</code>
              </pre>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

export default VariablesPage;
