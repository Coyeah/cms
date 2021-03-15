import Container from "typedi";
import { ObjectID } from "mongodb";
import { MongoRepository } from "typeorm";
import { ConnectionToken } from "src/construct/initConnection";
import { WeeklyEntity } from "src/model/t_weekly.entity";


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
    async findAll(): Promise<WeeklyEntity[]> {
        return await this.weeklyRepo.find();
    }

    // 增
    async create(dept: Partial<WeeklyEntity>): Promise<WeeklyEntity> {
        // ===== //
        const date = new Date();
        dept.created_time = dept.updated_time = date;
        // ===== //

        const res = this.weeklyRepo.create(dept);
        const result = await this.weeklyRepo.save(res);
        return result;
    }

    // 删
    async delete(_id: string): Promise<WeeklyEntity> {
        _id = new ObjectID(_id);
        const result = await this.weeklyRepo.findOne({ _id });
        await this.weeklyRepo.deleteOne({ _id })
        return result;
    }

    // 改
    async update(target: Partial<WeeklyEntity>): Promise<WeeklyEntity> {
        target._id = ObjectID(target._id);
        const updateData = {
            ...target,
            updated_time: new Date(),
        };
        delete updateData._id;

        await this.weeklyRepo.updateOne(
            {
                _id: target._id,
            },
            {
                $set: updateData,
            }
        );
        return await this.weeklyRepo.findOne({ _id: target._id });
    }
}