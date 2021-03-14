import { Field, InputType, ID } from "type-graphql";
import { UserEntity } from "src/model/t_user.entity";

@InputType({ description: "createUserInput" })
export class CreateUserInput implements Partial<UserEntity> {
    @Field()
    email: string;
}

@InputType({ description: "deleteUserInput" })
export class DeleteUserInput implements Partial<UserEntity> {
    @Field((type) => ID)
    _id: string;
}

@InputType({ description: "updateUserInput" })
export class UpdateUserInput implements Partial<UserEntity> {
    @Field()
    email: string;
}