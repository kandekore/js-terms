
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Terms.module.css";
import { useQuery, gql } from "@apollo/client";

const GET_ES6+_FEATURES_CONCEPTS = gql`
  query GetConceptsByCategory {
    getConceptsByCategory(category: "ES6+ Features") {
      term
      description
      code
    }
  }
`;

function ES6+FeaturesPage() {
  const { loading, error, data } = useQuery(GET_ES6+_FEATURES_CONCEPTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>ES6+ Features</h2>
      <p>Description about ES6+ Features.</p>

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

export default ES6+FeaturesPage;
