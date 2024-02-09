
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Terms.module.css";
import { useQuery, gql } from "@apollo/client";

const GET_MODERN_DEVELOPMENT_PRACTICES_CONCEPTS = gql`
  query GetConceptsByCategory {
    getConceptsByCategory(category: "Modern Development Practices") {
      term
      description
      code
    }
  }
`;

function ModernDevelopmentPracticesPage() {
  const { loading, error, data } = useQuery(GET_MODERN_DEVELOPMENT_PRACTICES_CONCEPTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>Modern Development Practices</h2>
      <p>Description about Modern Development Practices.</p>

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

export default ModernDevelopmentPracticesPage;
