import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import path from 'path';

import { UserResolvers } from "../graphql/user/user.resolves";

export default async function () {
  const schema = await buildSchema({
    resolvers: [UserResolvers],
    emitSchemaFile: path.resolve(__dirname, "../__snapshots__/schema.gql"),
  });

  return new ApolloServer({
    schema,
  });
}
