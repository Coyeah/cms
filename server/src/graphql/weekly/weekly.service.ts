import Container from "typedi";
import { ObjectID } from "mongodb";
import { FindManyOptions, LessThan, MongoRepository, MoreThan } from "typeorm";
import { ConnectionToken } from "src/construct/initConnection";
import { WeeklyEntity } from "src/model/t_weekly.entity";
import { isValidDate } from "src/utils/date";

export interface FindAllWeeklysType {
    start_date?: string | [string, string];
    end_date?: string | [string, string];
}

export class WeeklyService {
    private readonly weeklyRepo: MongoRepository<WeeklyEntity>;

    constructor() {
        const connection = Container.get(ConnectionToken);
        this.weeklyRepo = connection.getMongoRepository(WeeklyEntity);
    }

    // 查一个
    async findOne(_id: string): Promise<WeeklyEntity> {
        _id = new ObjectID(_id);
        return await this.weeklyRepo.findOne({ _id });
    }

    // 查全部
    async findAll(optionsOrConditions?: FindManyOptions<WeeklyEntity> | Partial<WeeklyEntity>): Promise<WeeklyEntity[]> {
        console.log(new Date());
        return await this.weeklyRepo.find({
            where: {
                start_date: MoreThan('2018-11-15  10:41:30.746877')
            }
        });
    }

    // 增
    async create(target: Partial<WeeklyEntity>): Promise<WeeklyEntity> {
        // ===== //
        const date = new Date();
        target.created_time = target.updated_time = date;
        // ===== //
        target.start_date = isValidDate(target.start_date as string, true);
        target.end_date = isValidDate(target.end_date as string, true);
        // ===== //

        const res = this.weeklyRepo.create(target);
        const result = await this.weeklyRepo.save(res);
        return result;
    }

    // 删
    async delete(_id: string): Promise<WeeklyEntity> {
        _id = new ObjectID(_id);
        const result = await this.weeklyRepo.findOne({ _id });
        await this.weeklyRepo.deleteOne({ _id });
        return result;
    }

    // 改
    async update(target: Partial<WeeklyEntity>): Promise<WeeklyEntity> {
        const _id = ObjectID(target._id);
        const updateData: Partial<WeeklyEntity> = {
            start_date: isValidDate(target.start_date as string, true),
            end_date: isValidDate(target.end_date as string, true),
            updated_time: new Date(),
        };

        await this.weeklyRepo.updateOne(
            {
                _id,
            },
            {
                $set: updateData,
            }
        );
        return await this.weeklyRepo.findOne({ _id });
    }
}
