require('dotenv').config();
const mongoose = require("mongoose");

const mongoDBUri = process.env.MONGODB_URI;

console.log("Connecting to MongoDB URI:", mongoDBUri);

mongoose.connect(mongoDBUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
})
  .then(() => {
    console.log("✅ MongoDB connected successfully.");
    process.exit();
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });
