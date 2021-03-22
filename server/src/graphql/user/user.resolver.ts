import { User } from "src/model/t_user.model";
import { Arg, Mutation, Query } from "type-graphql";
import { CreateUserInput, PartialUserInput } from "./user.dto";
import { UserService } from "./user.service";

export class UserResolver {
    private readonly __userService: UserService;

    constructor() {
        this.__userService = new UserService();
    }

    @Query(() => User)
    async getUser(
        @Arg("id")
        id: string
    ): Promise<User> {
        return await this.__userService.findById(id);
    }

    @Query(() => [User])
    async getUsers(
        @Arg("searchUserInput")
        args: PartialUserInput
    ): Promise<User[]> {
        return await this.__userService.find(args);
    }

    @Mutation(() => User)
    async createUser(
        @Arg("createUserInput")
        args: CreateUserInput
    ): Promise<User> {
        return await this.__userService.create(args);
    }

    @Mutation(() => User)
    async updateUser(
        @Arg('id')
        id: string,
        @Arg("updateUserInput")
        args: PartialUserInput,
    ): Promise<User> {
        return await this.__userService.update(id, args);
    }
}