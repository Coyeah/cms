import { BuildSchemaOptions } from "type-graphql";
import { UserResolvers } from './user/user.resolves';
import { DeptResolvers } from "./dept/dept.resolves";
import { OkrResolvers } from "./okr/okr.resolves";
import { WeeklyResolvers } from "./weekly/weekly.resolves";

export const resolvers: BuildSchemaOptions["resolvers"] = [
    UserResolvers,
    DeptResolvers,
    OkrResolvers,
    WeeklyResolvers,
];

