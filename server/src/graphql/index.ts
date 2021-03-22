import { BuildSchemaOptions } from "type-graphql";

import { UserResolver } from './user/user.resolver';
import { OkrResolver } from './okr/okr.resolver';
import { IntervalResolver } from "./interval/interval.resolver";

export const resolvers: BuildSchemaOptions["resolvers"] = [
    UserResolver,
    OkrResolver,
    IntervalResolver,
];

