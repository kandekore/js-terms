const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type Concept {
    category: String
    term: String
    description: String
    code: String
  }

  type Query {
    getConceptsByCategory(category: String!): [Concept]
    getConceptByTerm(term: String!): Concept
    getAllConcepts: [Concept]
    searchConceptsByDescription(keyword: String!): [Concept] # Added query
  }
`);

module.exports = schema;
