import { User, UseTypeEnum, UserTypeEnum } from "src/model/t_user.model";
import {
    InputType as GplInputType,
    Field as GqlField,
    Int,
} from "type-graphql";

@GplInputType({ description: "CreateUserInput" })
export class CreateUserInput implements Partial<User> {
    @GqlField(() => String)
    email: string;

    @GqlField(() => String, {
        nullable: true,
    })
    nick?: string;

    @GqlField(() => String)
    pwd: string;

    @GqlField(() => String, {
        nullable: true,
    })
    dept_id: string;

    @GqlField(() => Int, {
        nullable: true,
        defaultValue: UserTypeEnum.NORMAL,
    })
    user_type?: UserTypeEnum;

    @GqlField(() => Int, {
        nullable: true,
        defaultValue: 0,
    })
    user_level?: number;

    @GqlField(() => Int, {
        nullable: true,
        defaultValue: UseTypeEnum.NORMAL,
    })
    use_type?: UseTypeEnum;
}

@GplInputType({ description: "UpdateOrSearchUserInput" })
export class PartialUserInput implements Partial<User> {
    @GqlField(() => String, {
        nullable: true,
    })
    email?: string;

    @GqlField(() => String, {
        nullable: true,
    })
    nick?: string;

    @GqlField(() => String, {
        nullable: true,
    })
    pwd?: string;

    @GqlField(() => String, {
        nullable: true,
    })
    dept_id?: string;

    @GqlField(() => Int, {
        nullable: true,
    })
    user_type?: UserTypeEnum;

    @GqlField(() => Int, {
        nullable: true,
    })
    user_level?: number;

    @GqlField(() => Int, {
        nullable: true,
    })
    use_type?: UseTypeEnum;
}
