const mongoose = require("mongoose");
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schemas/typeDefs");
const resolvers = require("./schemas/resolvers");
const cors = require("cors");
const path = require('path');

const app = express();
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
  
async function startApolloServer() {
  await server.start();
  server.applyMiddleware({ app });

 
  app.use(express.static(path.join(__dirname, '../client/build')));


  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

startApolloServer();

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}${server.graphqlPath}`);
});
