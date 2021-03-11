import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

import { UserResolvers } from "../graphql/user/user.resolves";

export default async function () {
  const schema = await buildSchema({
    resolvers: [UserResolvers],
  });

  return new ApolloServer({
    schema,
  });
}
