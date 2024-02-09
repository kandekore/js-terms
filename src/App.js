import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Variables from "./components/Variables";
import Header from "./components/Header";
import DataTypes from "./components/DataTypes";
import Operators from "./components/Operators";
import ControlFlow from "./components/ControlFlow";
import FunctionsPage from "./components/Functions";
import ScopePage from "./components/Scope";
import ArraysPage from "./components/Arrays";
import "bootstrap/dist/css/bootstrap.min.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import SearchResults from "./components/SearchResults";
import styles from "./components/Terms.module.css";
import Footer from "./components/Footer";
import "./App.css";

// Initialize Apollo Client
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache()
});

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="d-flex flex-column min-vh-100">
          <main className={`flex-grow-1 ${styles.body}`}>
            <ApolloProvider client={client}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/variables" element={<Variables />} />
                <Route path="/data-types" element={<DataTypes />} />
                <Route path="/operators" element={<Operators />} />
                <Route path="/control-flow" element={<ControlFlow />} />
                <Route path="/functions" element={<FunctionsPage />} />
                <Route path="/scope" element={<ScopePage />} />
                <Route path="/arrays" element={<ArraysPage />} />
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

export default App;
