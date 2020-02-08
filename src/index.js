const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema");
const startDatabase = require("./database");

const context = async () => {
  const db = await startDatabase();

  return { db };
}

const resolvers = {
  events: async (_, context) => {
    const { db } = await context();

    return db
      .collection('events')
      .find()
      .toArray();
  },
  event: async ({ id }, context) => {
    const { db } = await context();

    return db
      .collection('events')
      .findOne({ id });
  }
};

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    context
  })
);

app.listen(4000);

console.log(`🚀 Server ready at http://localhost:4000/graphql`);
