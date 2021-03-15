import { BuildSchemaOptions } from "type-graphql";
import { UserResolvers } from './user/user.resolves';
import { DeptResolvers } from "./dept/dept.resolves";

export const resolvers: BuildSchemaOptions["resolvers"] = [
    UserResolvers,
    DeptResolvers
];

