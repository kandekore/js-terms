import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        
      <div>
  <h1>Welcome to Your JavaScript Resource</h1>
  <p>
    This site is the ultimate JavaScript learning platform, tailored for both novices beginning their programming journey and seasoned developers seeking a concise reference or to refresh their knowledge on specific concepts. Our comprehensive guide navigates through the expansive world of JavaScript, covering fundamental basics to advanced topics.
  </p>
  <p>
    As the backbone of interactive web development, mastering JavaScript is essential for anyone aiming to excel in the tech industry. Our platform is meticulously organized into categories, each dedicated to a specific aspect of JavaScript. These range from foundational topics like "Variables" and "Data Types" to more complex subjects such as "Asynchronous JavaScript," "Promises," and "Web APIs."
  </p>
  <p>
    Each category on serves as a portal to in-depth exploration, breaking down into key concepts with straightforward explanations and illustrative code examples. This structured approach ensures a comprehensive learning experience, allowing you to build a robust foundation before venturing into more complex areas.
  </p>
 
  <p>
    Our mission is to make JavaScript understandable and accessible to all, ensuring our content is continually updated to reflect the latest trends and best practices in the JavaScript ecosystem.
  </p>
  <p>
    Whether you are starting your programming journey, transitioning from another language, or an expert developer honing your skills, our platform supports your educational path. Embark on your exploration, delve into concepts, and commence coding today with the ultimate guide to mastering the web's language.
  </p>
</div>

      </div>
      <div style={{ display: "flex", justifyContent: "space%20between" }}>
        {/* Divide the JavaScript tree into three flex columns */}
        <nav style={{ width: "32%" }}>
          <ul>
            {/* Variables, Data Types, Operators */}
            <li>
              <Link to="/Variables">Variables</Link>
              <ul>
                <li>
                  <Link to="/concept?query=var">var</Link>
                </li>
                <li>
                  <Link to="/concept?query=let">let</Link>
                </li>
                <li>
                  <Link to="/concept?query=const">const</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/Data-Types">Data Types</Link>
              <ul>
                <li>
                  <Link to="/concept?query=String">String</Link>
                </li>
                <li>
                  <Link to="/concept?query=Number">Number</Link>
                </li>
                <li>
                  <Link to="/concept?query=Boolean">Boolean</Link>
                </li>
                <li>
                  <Link to="/concept?query=Object">Object</Link>
                </li>
                <li>
                  <Link to="/concept?query=Array">Array</Link>
                </li>
                <li>
                  <Link to="/concept?query=Null">Null</Link>
                </li>
                <li>
                  <Link to="/concept?query=Undefined">Undefined</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/Operators">Operators</Link>
              <ul>
                <li>
                  <Link to="/concept?query=Arithmetic">Arithmetic</Link>
                </li>
                <li>
                  <Link to="/concept?query=Assignment">Assignment</Link>
                </li>
                <li>
                  <Link to="/concept?query=Comparison">Comparison</Link>
                </li>
                <li>
                  <Link to="/concept?query=Logical">Logical</Link>
                </li>
                <li>
                  <Link to="/concept?query=Unary">Unary</Link>
                </li>
                <li>
                  <Link to="/concept?query=Ternary (Conditional)">Ternary (Conditional)</Link>
                </li>
              </ul>
            </li>
            {/* Control Flow */}
            <li>
              <Link to="/Control-Flow">Control Flow</Link>
              <ul>
                <li>
                  <Link to="/concept?query=if%20statement">if statement</Link>
                </li>
                <li>
                  <Link to="/concept?query=else%20statement">
                    else statement
                  </Link>
                </li>
                <li>
                  <Link to="/concept?query=else%20if%20statement">
                    else if statement
                  </Link>
                </li>
                <li>
                  <Link to="/concept?query=switch%20statement">
                    switch statement
                  </Link>
                </li>
                <li>
                  <Link to="/concept?query=for%20loop">for loop</Link>
                </li>
                <li>
                  <Link to="/concept?query=while%20loop">while loop</Link>
                </li>
                <li>
                  <Link to="/concept?query=do-while%20loop">do-while loop</Link>
                </li>
              </ul>
            </li>
            {/* Functions */}
            <li>
              <Link to="/Functions">Functions</Link>
              <ul>
                <li>
                  <Link to="/concept?query=Function%20declaration">
                    Function declaration
                  </Link>
                </li>
                <li>
                  <Link to="/concept?query=Function%20expression">
                    Function expression
                  </Link>
                </li>
                <li>
                  <Link to="/concept?query=Arrow%20function">
                    Arrow function
                  </Link>
                </li>
                <li>
                  <Link to="/concept?query=IIFE%20(Immediately%20Invoked%20Function%20Expression)">
                    IIFE (Immediately Invoked Function Expression)
                  </Link>
                </li>
              </ul>
            </li>

            {/* Scope */}
            <li>
              <Link to="/Scope">Scope</Link>
              <ul>
                <li>
                  <Link to="/concept?query=Global%20scope">Global scope</Link>
                </li>
                <li>
                  <Link to="/concept?query=Local%20scope">Local scope</Link>
                </li>
                <li>
                  <Link to="/concept?query=Block%20scope">Block scope</Link>
                </li>
                <li>
                  <Link to="/concept?query=Lexical%20scope">Lexical scope</Link>
                </li>
              </ul>
            </li>
            {/* Arrays Methods*/}
            <li>
              <Link to="/Array-Methods">Array Methods</Link>
              <ul>
                <li>
                  <Link to="/concept?query=push()">push()</Link>
                </li>
                <li>
                  <Link to="/concept?query=pop()">pop()</Link>
                </li>
                <li>
                  <Link to="/concept?query=shift()">shift()</Link>
                </li>
                <li>
                  <Link to="/concept?query=unshift()">unshift()</Link>
                </li>
                <li>
                  <Link to="/concept?query=splice()">splice()</Link>
                </li>
                <li>
                  <Link to="/concept?query=slice()">slice()</Link>
                </li>
                <li>
                  <Link to="/concept?query=concat()">concat()</Link>
                </li>
              </ul>
            </li>
            <Link to="/Array-Iteration">Array Iteration</Link>
               {/* Array iteration */}
               <ul>
               <li>
                  <Link to="/concept?query=forEach()">forEach()</Link>
                </li>
                <li>
                  <Link to="/concept?query=map()">map()</Link>
                </li>
                <li>
                  <Link to="/concept?query=filter()">filter()</Link>
                </li>
                <li>
                  <Link to="/concept?query=reduce()">reduce()</Link>
                </li></ul>
          </ul>
        </nav>
        <nav style={{ width: "32%" }}>
          <ul>
            {/* Objects */}
            <li>
              <Link to="/Objects">Objects</Link>
              <ul>
                {/* Object properties */}
                <li>
                  <Link to="/concept?query=Dot%20notation">Dot notation</Link>
                </li>
                <li>
                  <Link to="/concept?query=Bracket%20notation">
                    Bracket notation
                  </Link>
                </li>
                {/* Object methods */}
                <li>
                  <Link to="/concept?query=Object.keys()">Object.keys()</Link>
                </li>
                <li>
                  <Link to="/concept?query=Object.values()">Object.values()</Link>
                </li>
                <li>
                  <Link to="/concept?query=Object.entries()">
                    Object.entries()
                  </Link>
                </li>
                <li>
                  <Link to="/concept?query=Object%20destructuring">
                    Object destructuring
                  </Link>
                </li>
                <li>
                  <Link to="/concept?query=Object%20methods">
                    Object methods
                  </Link>
                </li>
                <li>
                  <Link to="/concept?query=Object%20properties">
                    Object properties
                  </Link>
                </li>
              </ul>
            </li>
            {/* Promises */}
            <li>
              <Link to="/Promises">Promises</Link>
              <ul>
                <li>
                  <Link to="/concept?query=Pending">Pending</Link>
                </li>
                <li>
                  <Link to="/concept?query=Fulfilled">Fulfilled</Link>
                </li>
                <li>
                  <Link to="/concept?query=Rejected">Rejected</Link>
                </li>
                <li>
                  <Link to="/concept?query=then()">then()</Link>
                </li>
                <li>
                  <Link to="/concept?query=catch()">catch()</Link>
                </li>
                <li>
                  <Link to="/concept?query=finally()">finally()</Link>
                </li>
                <li>
                  <Link to="/concept?query=Promise.all()">Promise.all()</Link>
                </li>
              </ul>
            </li>

            {/* Asynchronous JavaScript */}
            <li>
              <Link to="/Asynchronous-JavaScript">Asynchronous JavaScript</Link>
              <ul>
                <li>
                  <Link to="/concept?query=Callbacks">Callbacks</Link>
                </li>
                <li>
                  <Link to="/concept?query=Promises">Promises</Link>
                </li>
                <li>
                  <Link to="/concept?query=Async/Await">Async/Await</Link>
                </li>
              </ul>
            </li>

            {/* Error Handling */}
            <li>
              <Link to="/Error-Handling">Error Handling</Link>
              <ul>
                <li>
                  <Link to="/concept?query=try...catch statement">
                    try...catch statement
                  </Link>
                </li>
                <li>
                  <Link to="/concept?query=throw statement">throw statement</Link>
                </li>
              </ul>
            </li>

            {/* JSON */}
            <li>
              <Link to="/JSON">JSON (JavaScript Object Notation)</Link>
            </li>

            {/* Modules */}
            <li>
              <Link to="/Modules">Modules</Link>
              <ul>
                <li>
                  <Link to="/concept?query=import">import</Link>
                </li>
                <li>
                  <Link to="/concept?query=export">export</Link>
                </li>
              </ul>
            </li>
            {/* DOM Manipulation */}
            <li>
              <Link to="/DOM-Manipulation">DOM Manipulation</Link>
              <ul>
                <li>
                  <Link to="/concept?query=Selecting%20elements">
                    Selecting elements
                  </Link>
                </li>
                <li>
                  <Link to="/concept?query=Modifying%20elements">
                    Modifying elements
                  </Link>
                </li>
                <li>
                  <Link to="/concept?query=Creating%20elements">
                    Creating elements
                  </Link>
                </li>
              </ul>
            </li>

            {/* Events */}
            <li>
              <Link to="/Events">Events</Link>
              <ul>
                <li>
                  <Link to="/concept?query=Event%20listeners">
                    Event listeners
                  </Link>
                </li>
                <li>
                  <Link to="/concept?query=Event%20propagation">
                    Event propagation
                  </Link>
                </li>
                <li>
                  <Link to="/concept?query=Event%20delegation">
                    Event delegation
                  </Link>
                </li>
              </ul>
            </li>
            {/* AJAX */}
            <li>
              <Link to="/AJAX">AJAX (Asynchronous JavaScript and XML)</Link>
            </li>

            {/* Fetch API */}
            <li>
              <Link to="/Fetch-API">Fetch API</Link>
            </li>

            {/* ES6+ Features */}
            <li>
              <Link to="/ES6-Features">ES6+ Features</Link>
              <ul>
                <li>
                  <Link to="/concept?query=Template%20literals">
                    Template literals
                  </Link>
                </li>
                <li>
                  <Link to="/concept?query=Destructuring%20assignment">
                    Destructuring assignment
                  </Link>
                </li>
                <li>
                  <Link to="/concept?query=Spread%20rest%20operator">
                    Spread/rest operator
                  </Link>
                </li>
                <li>
                  <Link to="/concept?query=Arrow%20functions">
                    Arrow functions
                  </Link>
                </li>
                <li>
                  <Link to="/concept?query=Classes">Classes</Link>
                </li>
                <li>
                  <Link to="/concept?query=let%20and%20const">
                    let and const
                  </Link>
                </li>
                <li>
                  <Link to="/concept?query=Default%20parameters">
                    Default parameters
                  </Link>
                </li>
                <li>
                  <Link to="/concept?query=Modules">Modules</Link>
                </li>
                <li>
                  <Link to="/concept?query=Promises%20ES6">Promises</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <nav style={{ width: "32%" }}>
          <ul>
            {/* Web APIs */}
            <li>
              <Link to="/Web-APIs">Web APIs</Link>
              <ul>
                <li>
                  <Link to="/concept?query=Local%20Storage">Local Storage</Link>
                </li>
                <li>
                  <Link to="/concept?query=Session%20Storage">
                    Session Storage
                  </Link>
                </li>
                <li>
                  <Link to="/concept?query=Web%20Storage%20API">
                    Web Storage API
                  </Link>
                </li>
              </ul>
            </li>

            {/* Libraries and Frameworks */}
            <li>
              <Link to="/Libraries-and-Frameworks">
                Libraries and Frameworks
              </Link>
              <ul>
                <li>
                  <Link to="/concept?query=React">React</Link>
                </li>
                <li>
                  <Link to="/concept?query=Angular">Angular</Link>
                </li>
                <li>
                  <Link to="/concept?query=Vue.js">Vue.js</Link>
                </li>
              </ul>
            </li>

            {/* Debugging */}
            <li>
              <Link to="/Debugging">Debugging</Link>
              <ul>
                <li>
                  <Link to="/concept?query=Console.log()">Console.log()</Link>
                </li>
                <li>
                  <Link to="/concept?query=Breakpoints">Breakpoints</Link>
                </li>
                <li>
                  <Link to="/concept?query=DevTools">DevTools</Link>
                </li>
              </ul>
            </li>

            {/* Others */}
            <li>
              <Link to="/Others">Others</Link>
              <ul>
                <li>
                  <Link to="/concept?query=Closures">Closures</Link>
                </li>
                <li>
                  <Link to="/concept?query=Callbacks%20Others">Callbacks</Link>
                </li>
                <li>
                  <Link to="/concept?query=Prototypes">Prototypes</Link>
                </li>
                <li>
                  <Link to="/concept?query=this%20keyword">this keyword</Link>
                </li>
                <li>
                  <Link to="/concept?query=Hoisting">Hoisting</Link>
                </li>
                <li>
                  <Link to="/concept?query=Strict%20mode">Strict mode</Link>
                </li>
              </ul>
            </li>
            {/* Advanced JavaScript Concepts */}
            <li>
              <Link to="/Advanced-JavaScript-Concepts">
                Advanced JavaScript Concepts
              </Link>
              <ul>
                <li>
                  <Link to="/concept?query=Symbols">Symbols</Link>
                </li>
                <li>
                  <Link to="/concept?query=Generators">Generators</Link>
                </li>
                <li>
                  <Link to="/concept?query=Proxy">Proxy</Link>
                </li>
              </ul>
            </li>

            {/* Modern Development Practices */}
            <li>
              <Link to="/Modern-Development-Practices">
                Modern Development Practices
              </Link>
              <ul>
                <li>
                  <Link to="/concept?query=Service Workers">
                    Service Workers
                  </Link>
                </li>
                <li>
                  <Link to="/concept?query=Web Components">Web Components</Link>
                </li>
              </ul>
            </li>

            {/* Testing and Performance */}
            <li>
              <Link to="/Testing-and-Performance">Testing and Performance</Link>
              <ul>
                <li>
                  <Link to="/concept?query=Unit Testing">Unit Testing</Link>
                </li>
              </ul>
            </li>

            {/* Security */}
            <li>
              <Link to="/Security">Security</Link>
              <ul>
                <li>
                  <Link to="/concept?query=Cross-Site Scripting (XSS)">
                    Cross-Site Scripting (XSS)
                  </Link>
                </li>
              </ul>
            </li>

            {/* ES6+ Features Extended */}
            <li>
              <Link to="/ES6-Features-Extended">ES6+ Features Extended</Link>
              <ul>
                <li>
                  <Link to="/concept?query=Optional Chaining">
                    Optional Chaining
                  </Link>
                </li>
                <li>
                  <Link to="/concept?query=Nullish Coalescing Operator">
                    Nullish Coalescing Operator
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default HomePage;
