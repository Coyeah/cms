import { BuildSchemaOptions } from "type-graphql";

import { UserResolver } from './user/user.resolver';
import { OkrResolver } from './okr/okr.resolver';
import { IntervalResolver } from "./interval/interval.resolver";
import { TagResolver } from "./tag/tag.resolver";
import { BlogResolver } from "./blog/blog.resolver";

export const resolvers: BuildSchemaOptions["resolvers"] = [
    UserResolver,
    OkrResolver,
    IntervalResolver,
    TagResolver,
    BlogResolver,
];

