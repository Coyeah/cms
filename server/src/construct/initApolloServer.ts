import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import path from 'path';

import { resolvers } from 'src/graphql';

export default async function () {
  const schema = await buildSchema({
    resolvers,
    emitSchemaFile: path.resolve(__dirname, "../__snapshots__/schema.gql"),
  });

  return new ApolloServer({
    schema,
  });
}
