const mongoose = require("mongoose");
const fs = require("fs").promises;
const path = require("path");
const Concept = require("./models/conceptModel"); // Ensure correct path

const mongoURI = "mongodb://127.0.0.1/jsConceptsDB";
mongoose.set("strictQuery", true); // To keep strict query behavior
//mongoose.set('strictQuery', false); // To use the non-strict behavior that will be the default in Mongoose 7

async function seedDatabase() {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected to MongoDB...");

    const data = await fs.readFile(
      path.join(__dirname, "seeds", "terms.json"),
      "utf8"
    );
    const categories = JSON.parse(data);

    // Transform the categories object into a flat array of concept objects with category included
    const concepts = [];
    Object.keys(categories).forEach((category) => {
      categories[category].forEach((concept) => {
        concepts.push({ ...concept, category }); // Add category to each concept object
      });
    });

    await Concept.deleteMany({}); // Optional: Clear the collection before seeding
    await Concept.insertMany(concepts);
    console.log("Database seeded successfully!");

    mongoose.disconnect();
  } catch (error) {
    console.error("Failed to seed database:", error);
    process.exit(1);
  }
}

seedDatabase();
