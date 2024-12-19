import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import styles from "./components/concepts/Terms.module.css";
import Others from "./components/concepts/Others";
import Variables from "./components/concepts/Variables";
import DataTypes from "./components/concepts/DataTypes";
import Operators from "./components/concepts/Operators";
import ControlFlow from "./components/concepts/ControlFlow";
import Functions from "./components/concepts/Functions";
import Scope from "./components/concepts/Scope";
import ArrayMethods from "./components/concepts/ArrayMethods";
import ArrayIteration from "./components/concepts/Array-Iteration";
import SearchResults from "./components/SearchResults";
import Concept from "./components/concepts/Concepts";
import { Helmet } from "react-helmet";

// Dynamically fetch the GraphQL URI from environment variables
const client = new ApolloClient({
 
    // uri: process.env.REACT_APP_GRAPHQL_URI || "/graphql",
    uri: "http://localhost:4000/graphql",

  cache: new InMemoryCache(),
});

console.log("GraphQL Endpoint:", process.env.REACT_APP_GRAPHQL_URI);



function App() {
  return (
    <>
      <Router>
        <Header />
        <Helmet>
          <title>JavaScript Concepts and Code Examples | By D.Kandekore</title>
          <meta
            name="description"
            content="This site is the ultimate JavaScript learning platform, tailored for both novices beginning their programming journey and seasoned developers seeking a concise reference or to refresh their knowledge on specific concepts."
          />
        </Helmet>
        <div className="d-flex flex-column min-vh-100">
          <main className={`flex-grow-1 ${styles.body}`}>
            <ApolloProvider client={client}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/variables" element={<Variables />} />
                <Route path="/data-types" element={<DataTypes />} />
                <Route path="/operators" element={<Operators />} />
                <Route path="/control-flow" element={<ControlFlow />} />
                <Route path="/functions" element={<Functions />} />
                <Route path="/scope" element={<Scope />} />
                <Route path="/array-methods" element={<ArrayMethods />} />
                <Route path="/array-iteration" element={<ArrayIteration />} />
                <Route path="/others" element={<Others />} />
                <Route path="/concept" element={<Concept />} />
                <Route path="/search-results" element={<SearchResults />} />
              </Routes>
            </ApolloProvider>
          </main>
        </div>
        <Footer />
      </Router>
    </>
  );
}
/******  d6495d42-5d6e-48a6-9117-f8d7c3d35074  *******/

export default App;
