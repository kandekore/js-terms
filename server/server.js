const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schemas/typeDefs");
const resolvers = require("./schemas/resolvers");
const cors = require("cors");
const path = require('path');
const mongoose = require("mongoose");

const app = express();
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, '../build')));

// Catchall handler to serve React's index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: process.env.NODE_ENV !== 'production', // Disable playground in production
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
