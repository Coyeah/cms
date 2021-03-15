import Container from "typedi";
import { ObjectID } from "mongodb";
import { MongoRepository } from "typeorm";
import { OkrEntity } from "src/model/t_okr.entity";
import { ConnectionToken } from "src/construct/initConnection";


export class OkrService {
    private readonly okrRepo: MongoRepository<OkrEntity>;

    constructor() {
        const connection = Container.get(ConnectionToken);
        this.okrRepo = connection.getMongoRepository(OkrEntity);
    }



    // 查一个
    async findOne(_id: string): Promise<OkrEntity> {
        _id = new ObjectID(_id);
        return await this.okrRepo.findOne({ _id });
    }

    // 查全部
    async findAll(): Promise<OkrEntity[]> {
        return await this.okrRepo.find();
    }

    // 增
    async create(dept: Partial<OkrEntity>): Promise<OkrEntity> {
        // ===== //
        const date = new Date();
        dept.created_time = dept.updated_time = date;
        // ===== //

        const res = this.okrRepo.create(dept);
        const result = await this.okrRepo.save(res);
        return result;
    }

    // 删
    async delete(_id: string): Promise<OkrEntity> {
        _id = new ObjectID(_id);
        const result = await this.okrRepo.findOne({ _id });
        await this.okrRepo.deleteOne({ _id })
        return result;
    }

    // 改
    async update(target: Partial<OkrEntity>): Promise<OkrEntity> {
        target._id = ObjectID(target._id);
        const updateData = {
            ...target,
            updated_time: new Date(),
        };
        delete updateData._id;

        await this.okrRepo.updateOne(
            {
                _id: target._id,
            },
            {
                $set: updateData,
            }
        );
        return await this.okrRepo.findOne({ _id: target._id });
    }
}