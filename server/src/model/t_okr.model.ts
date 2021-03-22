import { prop as Property, getModelForClass } from "@typegoose/typegoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { Field as GqlField, ObjectType as GqlType, ID } from "type-graphql";

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

    @GqlField(() => String, {
        nullable: true,
        defaultValue: null,
    })
    @Property()
    o_id: string; // 针对 kr

    @GqlField(() => String)
    @Property()
    interval_id: string; // 时间区间
}

export const OkrModel = getModelForClass(Okr, {
    schemaOptions: {
        collection: "t_okr",
    },
});
