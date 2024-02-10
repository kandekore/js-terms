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
    const json = JSON.parse(data);
    const categories = json.categories;
    
    const concepts = [];
    categories.forEach(category => {
      if (category.concepts && Array.isArray(category.concepts)) {
        category.concepts.forEach(concept => {
          concepts.push({ 
            category: category.name, 
            term: concept.term, 
            description: concept.description, 
            code: concept.code // This will safely remain undefined if not present
          });
        });
      }
    });
    
    await Concept.deleteMany({});
    await Concept.insertMany(concepts);
    console.log("Database seeded successfully!");

    mongoose.disconnect();
  } catch (error) {
    console.error("Failed to seed database:", error);
    process.exit(1);
  }
}

seedDatabase();
