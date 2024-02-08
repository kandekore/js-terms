const mongoose = require("mongoose");
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schemas/typeDefs");
const resolvers = require("./schemas/resolvers");
const cors = require("cors");

mongoose
  .connect("mongodb://127.0.0.1/jsConceptsDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const app = express();
app.use(cors());

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true // Enable GraphQL Playground
});

async function startApolloServer() {
  await server.start();
  server.applyMiddleware({ app });
}

startApolloServer();

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}/graphql`);
});
