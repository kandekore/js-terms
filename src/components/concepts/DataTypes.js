import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Terms.module.css";
import { useQuery, gql } from "@apollo/client";

// GraphQL query to fetch variables concepts
const GET_DATA_TYPE_CONCEPTS = gql`
  query GetConceptsByCategory {
    getConceptsByCategory(category: "Data Types") {
      term
      description
      code
    }
  }
`;

function DataTypesPage() {
  const { loading, error, data } = useQuery(GET_DATA_TYPE_CONCEPTS);

  console.log("data" + data); // Add this line for debugging

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      <h2>Data Types</h2>
      <p>
        JavaScript provides different data types to hold various types of
        values. Here are some of the basic data types:
      </p>

      <Accordion defaultActiveKey="0" className="mb-3">
        {data.getConceptsByCategory.map((concept, index) => (
          <Accordion.Item eventKey={String(index)} key={index}>
            <Accordion.Header>{concept.term}</Accordion.Header>
            <Accordion.Body>
              <p>{concept.description}</p>
              <pre className={styles.codeSnippet}>
                <code>{concept.code}</code>
              </pre>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

export default DataTypesPage;
