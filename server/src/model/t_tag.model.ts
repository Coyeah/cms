import { prop as Property, getModelForClass } from "@typegoose/typegoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { Field as GqlField, ObjectType as GqlType, ID } from "type-graphql";

@GqlType()
export class Tag extends TimeStamps {

    @GqlField(() => ID)
    readonly _id: string;

    @GqlField(() => String)
    @Property({
        maxlength: 12,
        trim: true,
        required: true,
    })
    name: string; // 标签名称
}

export const TagModel = getModelForClass(Tag, {
    schemaOptions: {
        collection: "t_tag",
    },
});