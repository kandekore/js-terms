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

    getConceptByTerm: async (_, { term }) => {
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
    searchConceptsByDescription: async (_, { keyword }) => {
      // Use the $or operator to search in term, code, or description fields
      return await Concept.find({
        $or: [
          { term: { $regex: keyword, $options: "i" } },
          { category: { $regex: keyword, $options: "i" } },
          { code: { $regex: keyword, $options: "i" } },
          { description: { $regex: keyword, $options: "i" } }
        ]
      });
    }
  }
};

module.exports = resolvers;
