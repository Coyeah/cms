import { User, UseTypeEnum, UserTypeEnum } from "src/model/t_user.model";
import {
    InputType as GqlInputType,
    Field as GqlField,
    ArgsType as GqlArgsType,
    Int,
} from "type-graphql";

@GqlInputType({ description: "CreateUserInput" })
@GqlArgsType()
export class CreateUserInput implements Partial<User> {
    @GqlField(() => String)
    email: string;

    @GqlField(() => String, {
        nullable: true,
        defaultValue: null,
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

@GqlInputType({ description: "UpdateOrSearchUserInput" })
@GqlArgsType()
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
