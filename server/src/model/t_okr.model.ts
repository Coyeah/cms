import { prop as Property, getModelForClass } from "@typegoose/typegoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { Field as GqlField, ObjectType as GqlType, ID } from "type-graphql";
import { Interval } from "./t_interval.model";
import { User } from "./t_user.model";

@GqlType()
export class Okr extends TimeStamps {
    @GqlField(() => ID)
    readonly _id: string;

    @GqlField(() => String)
    @Property({
        maxlength: 50,
        trim: true,
        required: true,
    })
    title: string; // o / kr 内容

    @GqlField(() => String)
    @Property()
    user_id: string;

    @GqlField(() => User!)
    user: User;

    @GqlField(() => String, {
        nullable: true,
        defaultValue: null,
    })
    @Property()
    o_id: string; // 针对 kr

    @GqlField(() => String)
    @Property()
    interval_id: string; // 时间区间

    @GqlField(() => Interval)
    interval: Interval

}

export const OkrModel = getModelForClass(Okr, {
    schemaOptions: {
        collection: "t_okr",
    },
});
