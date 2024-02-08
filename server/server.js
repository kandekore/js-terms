const mongoose = require("mongoose");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schemas/typeDefs");
const root = require("./schemas/resolvers"); // If you named the file resolvers.js

mongoose
  .connect("mongodb://127.0.0.1/jsConceptsDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true // Enables GraphiQL IDE
  })
);

app.listen(4000, () =>
  console.log("Server running on http://localhost:4000/graphql")
);
