
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Concepts from "./components/concepts/Concepts";
import SearchResults from "./components/SearchResults"
import Variables from "./components/concepts/Variables";
import DataTypes from "./components/concepts/DataTypes";
import Operators from "./components/concepts/Operators";
import ControlFlow from "./components/concepts/ControlFlow";
import Functions from "./components/concepts/Functions";
import Scope from "./components/concepts/Scope";
import Objects from "./components/concepts/Objects";
import ArrayMethods from "./components/concepts/ArrayMethods";
import ArrayIteration from "./components/concepts/Array-Iteration";
import Promises from "./components/concepts/Promises";
import AsynchronousJavaScript from "./components/concepts/AsynchronousJavaScript";
import ErrorHandling from "./components/concepts/ErrorHandling";
import JSONJavaScriptObjectNotation from "./components/concepts/JSONJavaScriptObjectNotation";
import Modules from "./components/concepts/Modules";
import DOMManipulation from "./components/concepts/DOMManipulation";
import Events from "./components/concepts/Events";
import AJAX from "./components/concepts/AJAX";
import FetchAPI from "./components/concepts/FetchAPI";
import ES6Features from "./components/concepts/ES6+Features";
import WebAPIs from "./components/concepts/WebAPIs";
import LibrariesAndFrameworks from "./components/concepts/LibrariesandFrameworks";
import Debugging from "./components/concepts/Debugging";
import Security from "./components/concepts/Security";
import AdvancedJavaScriptConcepts from "./components/concepts/AdvancedJavaScriptConcepts";
import ModernDevelopmentPractices from "./components/concepts/ModernDevelopmentPractices";
import TestingAndPerformance from "./components/concepts/TestingandPerformance";
import ES6FeaturesExtended from "./components/concepts/ES6+FeaturesExtended";
import Others from "./components/concepts/Others";

function Links() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/concept" element={<Concepts />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/variables" element={<Variables />} />
        <Route path="/data-types" element={<DataTypes />} />
        <Route path="/operators" element={<Operators />} />
        <Route path="/control-flow" element={<ControlFlow />} />
        <Route path="/functions" element={<Functions />} />
        <Route path="/scope" element={<Scope />} />
        <Route path="/objects" element={<Objects />} />
        <Route path="/array-methods" element={<ArrayMethods />} />
        <Route path="/array-iteration" element={<ArrayIteration />} />
        <Route path="/promises" element={<Promises />} />
        <Route path="/asynchronous-javascript" element={<AsynchronousJavaScript />} />
        <Route path="/error-handling" element={<ErrorHandling />} />
        <Route path="/json-javascript-object-notation" element={<JSONJavaScriptObjectNotation />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="/dom-manipulation" element={<DOMManipulation />} />
        <Route path="/events" element={<Events />} />
        <Route path="/ajax" element={<AJAX />} />
        <Route path="/fetch-api" element={<FetchAPI />} />
        <Route path="/es6-features" element={<ES6Features />} />
        <Route path="/web-apis" element={<WebAPIs />} />
        <Route path="/libraries-and-frameworks" element={<LibrariesAndFrameworks />} />
        <Route path="/debugging" element={<Debugging />} />
        <Route path="/security" element={<Security />} />
        <Route path="/advanced-javascript-concepts" element={<AdvancedJavaScriptConcepts />} />
        <Route path="/modern-development-practices" element={<ModernDevelopmentPractices />} />
        <Route path="/testing-and-performance" element={<TestingAndPerformance />} />
        <Route path="/es6-features-extended" element={<ES6FeaturesExtended />} />
        <Route path="/others" element={<Others />} />
      </Routes>
    </>
  );
}

export default Links;
