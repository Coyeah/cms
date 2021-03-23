import { Okr } from "src/model/t_okr.model";
import { Arg, Mutation, Query } from "type-graphql";
import { IntervalService } from "../interval/interval.service";
import { UserService } from "../user/user.service";
import { CreateOkrInput, UpdateOkrInput } from "./okr.dto";
import { OkrService } from "./okr.service";

export class OkrResolver {
    private readonly __okrService: OkrService;
    private readonly __userService: UserService;
    private readonly __intervalService: IntervalService;

    constructor() {
        this.__okrService = new OkrService();
        this.__userService = new UserService();
        this.__intervalService = new IntervalService();
    }

    @Query(() => Okr)
    async getOkr(
        @Arg("id")
        id: string
    ): Promise<Okr> {
        const result = await this.__okrService.findById(id);
        return await this.handleResult(result);
    }

    @Mutation(() => Okr)
    async createOkr(
        @Arg("createOkrInput")
        args: CreateOkrInput
    ): Promise<Okr> {
        return await this.__okrService.create(args);
    }

    @Mutation(() => Okr)
    async updateOkr(
        @Arg("id")
        id: string,
        @Arg("updateOkrInput")
        args: UpdateOkrInput
    ): Promise<Okr> {
        const result = await this.__okrService.update(id, args);
        return await this.handleResult(result);
    }

    handleResult = async (result: Okr) => {
        const { user_id, interval_id } = result;
        result.user = await this.__userService.findById(user_id);
        result.interval = await this.__intervalService.findById(interval_id);
        return result;
    };
}