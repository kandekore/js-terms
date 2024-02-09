
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Terms.module.css";
import { useQuery, gql } from "@apollo/client";

const GET_ASYNCHRONOUS_JAVASCRIPT_CONCEPTS = gql`
  query GetConceptsByCategory {
    getConceptsByCategory(category: "Asynchronous JavaScript") {
      term
      description
      code
    }
  }
`;

function AsynchronousJavaScriptPage() {
  const { loading, error, data } = useQuery(GET_ASYNCHRONOUS_JAVASCRIPT_CONCEPTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>Asynchronous JavaScript</h2>
      <p>Description about Asynchronous JavaScript.</p>

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

export default AsynchronousJavaScriptPage;
