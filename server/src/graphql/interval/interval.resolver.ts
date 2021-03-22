import { Interval } from "src/model/t_interval.model";
import { Arg, Mutation, Query } from "type-graphql";
import {
    CreateIntervalInput,
    SearchIntervalInput,
    SearchIntervalStatusType,
    UpdateIntervalInput,
} from "./interval.dto";
import { IntervalService } from "./interval.service";

export class IntervalResolver {
    private readonly __intervalService: IntervalService;

    constructor() {
        this.__intervalService = new IntervalService();
    }

    @Query(() => Interval)
    async getInterval(
        @Arg("id")
        id: string
    ): Promise<Interval> {
        return await this.__intervalService.findById(id);
    }

    @Query(() => [Interval])
    async getAllInterval(): Promise<Interval[]> {
        return await this.__intervalService.find();
    }

    @Query(() => [Interval])
    async getIntervalBy(
        @Arg("searchIntervalInput")
        args: SearchIntervalInput
    ): Promise<Interval[]> {
        return await this.__intervalService.findBy({
            start_at: new Date(args.start_at),
            end_at: new Date(args.end_at),
            status: args.status || SearchIntervalStatusType.BOTH,
        });
    }

    @Mutation(() => Interval)
    async createInterval(
        @Arg("createIntervalInput")
        args: CreateIntervalInput
    ): Promise<Interval> {
        return await this.__intervalService.create({
            start_at: new Date(args.start_at),
            end_at: new Date(args.end_at),
        });
    }

    @Mutation(() => Interval)
    async deleteInterval(
        @Arg("id")
        id: string
    ): Promise<Interval> {
        return await this.__intervalService.delete(id);
    }

    @Mutation(() => Interval)
    async updateInterval(
        @Arg("id")
        id: string,
        @Arg("updateIntervalInput")
        args: UpdateIntervalInput
    ): Promise<Interval> {
        return await this.__intervalService.update(id, {
            start_at: args.start_at && new Date(args.start_at),
            end_at: args.end_at && new Date(args.end_at),
        });
    }
}
