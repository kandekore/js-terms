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
import Arrays from "./components/concepts/Arrays";
import ArraysI from "./components/concepts/ArrayIteration";
import SearchResults from "./components/SearchResults";
import Concept from "./components/concepts/Concepts";
import Objects from "./components/concepts/Objects";
import Promises from "./components/concepts/Promises";
import AsynchronousJavaScript from "./components/concepts/AsynchronousJavaScript";
import ErrorHandling from "./components/concepts/ErrorHandling";
import JSON from "./components/concepts/JSON";
import Modules from "./components/concepts/Modules";
import DOMManipulation from "./components/concepts/DOMManipulation";
import Events from "./components/concepts/Events";
import AJAX from "./components/concepts/AJAX";
import FetchAPI from "./components/concepts/FetchAPI";
import ES6Features from "./components/concepts/ES6Features";
import WebAPIs from "./components/concepts/WebAPIs";
import LibrariesFrameworks from "./components/concepts/LibrariesandFrameworks";
import Debugging from "./components/concepts/Debugging";
import Security from "./components/concepts/Security";
import Advanced from "./components/concepts/AdvancedJavaScriptConcepts"
import Modern from "./components/concepts/ModernDevelopmentPractices"
import Testing from "./components/concepts/TestingandPerformance"
import E6 from "./components/concepts/ES6FeaturesExtended"

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
                <Route path="/functions" element={<Functions />} />
                <Route path="/scope" element={<Scope />} />
                <Route path="/array-methods" element={<Arrays />} />
                <Route path="/array-iteration" element={<ArraysI />} />
                <Route path="/objects" element={<Objects />} />
                <Route path="/promises" element={<Promises />} />
                <Route
                  path="/asynchronous-javascript"
                  element={<AsynchronousJavaScript />}
                />
                <Route path="/error-handling" element={<ErrorHandling />} />
                <Route path="/json" element={<JSON />} />
                <Route path="/modules" element={<Modules />} />
                <Route path="/dom-manipulation" element={<DOMManipulation />} />
                <Route path="/events" element={<Events />} />
                <Route path="/ajax" element={<AJAX />} />
                <Route path="/fetch-api" element={<FetchAPI />} />
                <Route path="/es6-features" element={<ES6Features />} />
                <Route path="/web-apis" element={<WebAPIs />} />
                <Route
                  path="/libraries-and-frameworks"
                  element={<LibrariesFrameworks />}
                />
                <Route path="/debugging" element={<Debugging />} />
                <Route path="/security" element={<Security />} />
                <Route path="/advanced-javascript-concepts" element={<Advanced />} />
                <Route path="/modern-development-practices" element={<Modern />} />
                <Route path="/testing-and-performance" element={<Testing />} />
                <Route path="/es6-features-extended" element={<E6 />} />
                <Route path="/others" element={<Others />} />
                <Route path="/search-results" element={<SearchResults />} />
                <Route path="/concept" element={<Concept />} />
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
