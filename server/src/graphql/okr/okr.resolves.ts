import { OkrEntity } from "src/model/t_okr.entity";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { CreateOkrInput, DeleteOkrInput, UpdateOkrInput } from "./okr.dto";
import { OkrService } from "./okr.service";

@Resolver(() => OkrEntity)
export class OkrResolvers {
    private readonly okrService: OkrService;

    constructor() {
        this.okrService = new OkrService();
    }

    @Query(() => OkrEntity)
    async getOkr(
        @Arg("_id")
        _id: string
    ): Promise<OkrEntity> {
        return await this.okrService.findOne(_id);
    }

    @Query(() => [OkrEntity])
    async getOkrs(): Promise<OkrEntity[]> {
        return await this.okrService.findAll();
    }

    @Mutation(() => OkrEntity)
    async createOkr(
        @Arg('createOkrInput')
        args: CreateOkrInput
    ): Promise<OkrEntity> {
        return await this.okrService.create(args);
    }

    @Mutation(() => OkrEntity)
    async deleteOkr(
        @Arg('deleteOkrInput')
        args: DeleteOkrInput
    ): Promise<OkrEntity> {
        return await this.okrService.delete(args._id);
    }

    @Mutation(() => OkrEntity)
    async updateOkr(
        @Arg('updateOkrInput')
        args: UpdateOkrInput
    ): Promise<OkrEntity> {
        return await this.okrService.update(args);
    }
}