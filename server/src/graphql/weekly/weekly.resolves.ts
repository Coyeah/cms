import { WeeklyEntity } from "src/model/t_weekly.entity";
import { WeeklyService } from "./weekly.service";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import {
    CreateWeeklyInput,
    DeleteWeeklyInput,
    UpdateWeeklyInput,
} from "./weekly.dto";

@Resolver((of) => WeeklyEntity)
export class WeeklyResolvers {
    private readonly weeklyService: WeeklyService;

    constructor() {
        this.weeklyService = new WeeklyService();
    }

    @Query(() => WeeklyEntity)
    async getWeekly(
        @Arg("_id")
        _id: string
    ): Promise<WeeklyEntity> {
        return await this.weeklyService.findOne(_id);
    }

    @Query(() => [WeeklyEntity])
    async getWeeklys(): Promise<WeeklyEntity[]> {
        return await this.weeklyService.findAll();
    }

    @Mutation(() => WeeklyEntity)
    async createWeekly(
        @Arg("createWeeklyInput")
        args: CreateWeeklyInput
    ): Promise<WeeklyEntity> {
        return await this.weeklyService.create(args);
    }

    @Mutation(() => WeeklyEntity)
    async deleteWeekly(
        @Arg("deleteWeeklyInput")
        args: DeleteWeeklyInput
    ): Promise<WeeklyEntity> {
        return await this.weeklyService.delete(args._id);
    }

    @Mutation(() => WeeklyEntity)
    async updateWeekly(
        @Arg("updateWeeklyInput")
        args: UpdateWeeklyInput
    ): Promise<WeeklyEntity> {
        return await this.weeklyService.update(args);
    }
}
