import { ApolloServer } from "apollo-server-express";

import testTypeDefs from '../graphql/test/test.typeDefs';
import testResolvers from '../graphql/test/test.resolves';

const typeDefs = [testTypeDefs];

const resolvers = [testResolvers];

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

export default server;