import { Resolver, Query, Arg, Mutation } from "type-graphql";
import { UserEntity } from "src/model/t_user.entity";
import { UserService } from "./user.service";

@Resolver(of => UserEntity)
export class UserResolvers {
    private readonly userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    @Query(returns => UserEntity)
    async getUser(
        @Arg('id')
        id: string
    ): Promise<UserEntity> {
        return await this.userService.findOne(id);
    }

    @Query(returns => UserEntity)
    async getUsers(): Promise<UserEntity[]> {
        return await this.userService.findAll();
    }

    @Mutation(returns => UserEntity)
    async createUser(
        // @Arg('createUserInput')
        args: any
    ): Promise<UserEntity> {
        return await this.userService.create(args);
    }

    @Mutation(returns => UserEntity)
    async deleteUser(
        // @Arg('deleteUserInput')
        args: any
    ): Promise<UserEntity> {
        return await this.userService.delete(args.id)
    }

    @Mutation(returns => UserEntity)
    async updateUser(
        // @Arg('updateUserInput')
        args: any
    ): Promise<UserEntity> {
        return await this.userService.update(args);
    }

}
