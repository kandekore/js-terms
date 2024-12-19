require('dotenv').config(); // Load environment variables
const { connect, connection } = require("mongoose");

// Use the environment variable or provide a default for development
const mongoDBUri = process.env.MONGODB_URI || "mongodb://127.0.0.1/jsConceptsDB";

console.log("Connecting to MongoDB URI:", mongoDBUri); // Debugging log

connect(mongoDBUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, // Add timeout for quicker error feedback
})
  .then(() => console.log("✅ MongoDB connected successfully."))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });

module.exports = connection;
