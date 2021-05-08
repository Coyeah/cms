import { prop as Property, getModelForClass } from "@typegoose/typegoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import {
    Field as GqlField,
    ObjectType as GqlType,
    ID,
    Int,
} from "type-graphql";

export enum UseTypeEnum {
    NORMAL = 0, // 正常
    DISABLED = 1, // 停用
}

export enum UserTypeEnum {
    NORMAL = 0, // 普通用户
    ADMIN = 1, // 管理员
}

@GqlType()
export class User extends TimeStamps {
    @GqlField(() => ID)
    readonly _id: string;

    @GqlField(() => String)
    @Property({
        maxlength: 30,
        trim: true,
        required: true,
        unique: true,
    })
    email: string;

    @GqlField(() => String, {
        nullable: true,
        defaultValue: null,
    })
    @Property({
        maxlength: 20,
        trim: true,
    })
    nick: string;

    @GqlField(() => String)
    @Property({
        maxlength: 50,
        required: true,
    })
    pwd: string;

    @GqlField(() => String, {
        nullable: true,
        defaultValue: null,
    })
    @Property()
    dept_id: string;

    @GqlField(() => Int)
    @Property({
        enum: UserTypeEnum,
        default: UserTypeEnum.NORMAL,
    })
    user_type: UserTypeEnum;

    @GqlField(() => Int)
    @Property({ default: 0 })
    user_level: number;

    @GqlField(() => Int)
    @Property({
        enum: UseTypeEnum,
        default: UseTypeEnum.NORMAL,
    })
    use_type: UseTypeEnum;
}

export const UserModel = getModelForClass(User, {
    schemaOptions: {
        collection: "t_user",
    },
});
