import { Interval, IntervalModel } from "src/model/t_interval.model";
import { SearchIntervalStatusType } from "./interval.dto";

export class IntervalService {
    // 查
    findById = async (id: string): Promise<Interval> =>
        await IntervalModel.findById(id).exec();

    // 查全部
    find = async (): Promise<Interval[]> =>
        await IntervalModel.find().exec();

    // 查指定区间
    async findBy(target: Partial<Interval> & { status: SearchIntervalStatusType }): Promise<Interval[]> {
        const { status, start_at: startAt, end_at: endAt } = target;
        let result = IntervalModel.find();

        if (
            status === SearchIntervalStatusType.ONLY_START || 
            status === SearchIntervalStatusType.BOTH
        ) {
            result = result.where("start_at").gte(startAt).lte(endAt);
        }
        if (
            status === SearchIntervalStatusType.ONLY_END || 
            status === SearchIntervalStatusType.BOTH
        ) {
            result = result.where("end_at").gte(startAt).lte(endAt);
        }

        return await result;
    }

    // 增
    create = async (target: Omit<Interval, "_id">): Promise<Interval> => {
        const { _id: id } = await IntervalModel.create(target as Interval);
        return await this.findById(id);
    };

    // 删
    delete = async (id: string): Promise<Interval> =>
        await IntervalModel.findOneAndRemove({ id });

    // 改
    async update(_id: string, target: Partial<Interval>): Promise<Interval> {
        return await IntervalModel.findOneAndUpdate(
            {
                _id,
            },
            target,
            {
                new: true,
                strict: true,
            }
        );
    }
}
