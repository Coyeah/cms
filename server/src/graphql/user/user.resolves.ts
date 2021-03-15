import { Resolver, Query, Arg, Mutation } from "type-graphql";
import { UserEntity } from "src/model/t_user.entity";
import { UserService } from "./user.service";
import { CreateUserInput, DeleteUserInput, UpdateUserInput } from "./user.dto";

@Resolver(of => UserEntity)
export class UserResolvers {
    private readonly userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    @Query(returns => UserEntity)
    async getUser(
        @Arg('_id')
        _id: string
    ): Promise<UserEntity> {
        return await this.userService.findOne(_id);
    }

    @Query(returns => [UserEntity])
    async getUsers(): Promise<UserEntity[]> {
        return await this.userService.findAll();
    }

    @Mutation(returns => UserEntity)
    async createUser(
        @Arg('createUserInput')
        args: CreateUserInput
    ): Promise<UserEntity> {
        return await this.userService.create(args);
    }

    @Mutation(returns => UserEntity)
    async deleteUser(
        @Arg('deleteUserInput')
        args: DeleteUserInput
    ): Promise<UserEntity> {
        return await this.userService.delete(args._id)
    }

    @Mutation(returns => UserEntity)
    async updateUser(
        @Arg('updateUserInput')
        args: UpdateUserInput
    ): Promise<UserEntity> {
        return await this.userService.update(args);
    }

}
