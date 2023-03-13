const graphql = require("graphql");
const { GraphQLSchema } = graphql;

const RootQuery = require("./types/root-query-type");
const mutation = require("./mutations");

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
