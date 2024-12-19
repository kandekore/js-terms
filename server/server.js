// const mongoose = require("mongoose");
// const express = require("express");
// const { ApolloServer } = require("apollo-server-express");
// const cors = require("cors");
// const path = require("path");
// require("dotenv").config();

// const typeDefs = require("./schemas/typeDefs");
// const resolvers = require("./schemas/resolvers");

// const app = express();
// app.use(cors());
// server.applyMiddleware({ app, path: "/graphql" });

// // MongoDB Connection
// mongoose.set("strictQuery", false);
// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverSelectionTimeoutMS: 5000, // Adjust as needed
// })
// .then(() => console.log("MongoDB connected successfully."))
// .catch((err) => console.error("MongoDB connection error:", err));

// // Apollo Server Setup
// async function startApolloServer() {
//   const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//   });

//   await server.start();
//   server.applyMiddleware({ app });

//   app.use(express.static(path.join(__dirname, "../client/build")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../client/build", "index.html"));
//   });

//   const PORT = process.env.PORT || 4000;
//   app.listen(PORT, () => {
//     console.log(`🚀 Server ready at http://javascript-concepts.com:${PORT}${server.graphqlPath}`);
//   });
// }

// startApolloServer();

const mongoose = require("mongoose");
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const typeDefs = require("./schemas/typeDefs");
const resolvers = require("./schemas/resolvers");

const app = express();
app.use(cors()); // Enable CORS for API access

// MongoDB Connection
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
})
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch(err => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });

// Apollo Server Setup
async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    formatError: (err) => {
      console.error("GraphQL Error:", err);
      return err;
    },
  });

  await server.start();
  server.applyMiddleware({ app, path: "/graphql" }); // GraphQL served at /graphql

  // Serve React build files
  app.use(express.static(path.join(__dirname, "../client/build")));

  // Catch-all route to serve React index.html for unmatched routes
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });

  // Start the server
  const PORT = process.env.PORT || 4000; // Use port 80 for production
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Server ready at http://your-production-domain/graphql`);
  });
}

startApolloServer();

