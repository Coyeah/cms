import { Field, InputType, ID, Int } from "type-graphql";
import { MaxLength, Max, Min } from "class-validator";
import { UserEntity } from "src/model/t_user.entity";

@InputType({ description: "createUserInput" })
export class CreateUserInput implements Partial<UserEntity> {

    @Field((type) => String, {
        nullable: false,
    })
    @MaxLength(30)
    email: string;

    @Field((type) => String, {
        nullable: false,
    })
    @MaxLength(50)
    user_pwd: string;

    @Field((type) => Int, {
        defaultValue: 0,
    })
    @Max(10)
    @Min(0)
    user_type: number = 0;

    @Field((type) => Int, {
        defaultValue: 0,
    })
    @Max(10)
    @Min(0)
    use_type: number = 0;

    @Field((type) => Int, {
        defaultValue: 0,
    })
    user_level: number = 0;
}

@InputType({ description: "deleteUserInput" })
export class DeleteUserInput implements Partial<UserEntity> {
    @Field((type) => ID)
    _id: string;
}

@InputType({ description: "updateUserInput" })
export class UpdateUserInput implements Partial<UserEntity> {

    @Field((type) => ID)
    _id: string;

    @Field((type) => String, {
        nullable: true,
    })
    @MaxLength(30)
    email?: string;

    @Field((type) => String, {
        nullable: true,
    })
    @MaxLength(50)
    user_pwd?: string;

    @Field((type) => Int, {
        nullable: true,
    })
    @Max(10)
    @Min(0)
    user_type?: number;

    @Field((type) => Int, {
        nullable: true,
    })
    @Max(10)
    @Min(0)
    use_type?: number;

    @Field((type) => Int, {
        nullable: true,
    })
    user_level?: number;
}