const Concept = require("../models/conceptModel");

const resolvers = {
  Query: {
    getConceptsByCategory: async (_, { category }) => {
      try {
        const concepts = await Concept.find({ category });
        return concepts;
      } catch (error) {
        console.error(error);
        return null; // Return null in case of error
      }
    },

    getConceptByTerm: async ({ term }) => {
      try {
        const concept = await Concept.findOne({ term });
        return concept;
      } catch (error) {
        console.error(error);
        return null;
      }
    },
    getAllConcepts: async () => {
      try {
        const concepts = await Concept.find({});
        return concepts;
      } catch (error) {
        console.error(error);
        return [];
      }
    },
    searchConceptsByDescription: async ({ keyword }) => {
      // Implementation logic here
      // For example, using a regex search in MongoDB:
      return await Concept.find({
        description: { $regex: keyword, $options: "i" }
      });
    }
  }
};

module.exports = resolvers;
