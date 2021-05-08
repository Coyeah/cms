import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { Field as GqlField, ObjectType as GqlType, ID, Int } from "type-graphql";
import { prop as Property, getModelForClass } from "@typegoose/typegoose";
import { User } from "./t_user.model";
import { Okr } from "./t_okr.model";
import { Tag } from "./t_tag.model";

export enum BlogTypeEnum {
    NORMAL = 0, // 正常
    STAR = 1, // 星标 
    DISABLED = 2, // 停用
}

@GqlType()
export class Blog extends TimeStamps {

    @GqlField(() => ID)
    readonly _id: string;

    @GqlField(() => String)
    @Property({
        maxlength: 50,
        trim: true,
        required: true,
    })
    title: string;

    @GqlField(() => String, {
        nullable: true,
        defaultValue: null,
    })
    @Property()
    content: string;

    @GqlField(() => Int)
    @Property({
        enum: BlogTypeEnum,
        default: BlogTypeEnum.NORMAL,
    })
    type: BlogTypeEnum;

    @GqlField(() => String, {
        nullable: true,
        defaultValue: null,
    })
    @Property()
    okr_id: string; // 对应 kr

    @GqlField(() => Okr, {
        nullable: true,
        defaultValue: null
    })
    okr: Okr;

    @GqlField(() => String)
    @Property()
    user_id: string;

    @GqlField(() => User!)
    user: User;

    @GqlField(() => [String], {
        nullable: true,
        defaultValue: null
    })
    @Property({
        set: (val: string[]) => val.join(';'),
        get: (val: string) => val.split(';'),
        type: String
    })
    tag_id: string[];

    @GqlField(() => [String], {
        nullable: true,
        defaultValue: null
    })
    tags: Tag[];
}

export const BlogModel = getModelForClass(Blog, {
    schemaOptions: {
        collection: "t_blog",
    },
});
