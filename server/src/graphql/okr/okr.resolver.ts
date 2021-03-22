import { Okr } from "src/model/t_okr.model";
import { Arg, Mutation, Query } from "type-graphql";
import { CreateOkrInput } from "./okr.dto";
import { OkrService } from "./okr.service";

export class OkrResolver {
    private readonly __okrService: OkrService;

    constructor() {
        this.__okrService = new OkrService();
    }

    @Query(() => Okr)
    async getOkr(
        @Arg('id')
        id: string
    ): Promise<Okr> {
        return await this.__okrService.findById(id);
    }

    @Mutation(() => Okr)
    async createOkr(
        @Arg("createOkrInput")
        args: CreateOkrInput
    ): Promise<Okr> {
        return await this.__okrService.create(args);
    }
}