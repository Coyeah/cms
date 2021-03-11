import { Resolver, Query, Arg, Mutation } from "type-graphql";
import { MongoRepository } from "typeorm";
import { Container } from "typedi";
import uid from "uid-safe";

import { ConnectionToken } from "../../construct/initConnection";
import { UserEntity } from "../../model/t_user.entity";

@Resolver((of) => UserEntity)
export class UserResolvers {
    private userRepo: MongoRepository<UserEntity>;

    constructor() {
        const connection = Container.get(ConnectionToken);
        this.userRepo = connection.getMongoRepository(UserEntity);
    }

    @Query((returns) => UserEntity)
    async getUserById(@Arg("id") id: string): Promise<UserEntity | undefined> {
        return await this.userRepo.findOne({ id });
    }

    @Mutation((returns) => UserEntity)
    async addUser(@Arg("email") email: string): Promise<UserEntity | undefined> {
        const id = uid.sync(18);
        await this.userRepo.insertOne({ id, email });
        return await this.userRepo.findOne({ id, email });
    }
}
