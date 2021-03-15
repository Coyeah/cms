import Container from "typedi";
import { MongoRepository } from "typeorm";
import { ObjectID } from "mongodb";
import { ConnectionToken } from "src/construct/initConnection";
import { DeptEntity } from "src/model/t_dept.entity";

export class DeptService {
    private readonly deptRepo: MongoRepository<DeptEntity>

    constructor() {
        const connection = Container.get(ConnectionToken);
        this.deptRepo = connection.getMongoRepository(DeptEntity);
    }

    // 查一个
    async findOne(_id: string): Promise<DeptEntity> {
        _id = new ObjectID(_id);
        return await this.deptRepo.findOne({ _id });
    }

    // 查全部
    async findAll(): Promise<DeptEntity[]> {
        return await this.deptRepo.find();
    }

    // 增
    async create(dept: Partial<DeptEntity>): Promise<DeptEntity> {
        // ===== //
        const date = new Date();
        dept.created_time = dept.updated_time = date;
        // ===== //

        const res = this.deptRepo.create(dept);
        const result = await this.deptRepo.save(res);
        return result;
    }

    // 删
    async delete(_id: string): Promise<DeptEntity> {
        _id = new ObjectID(_id);
        const result = await this.deptRepo.findOne({ _id });
        await this.deptRepo.deleteOne({ _id })
        return result;
    }

    // 改
    async update(dept: Partial<DeptEntity>): Promise<DeptEntity> {
        dept._id = ObjectID(dept._id);
        const updateData = {
            ...dept,
            updated_time: new Date(),
        };
        delete updateData._id;

        await this.deptRepo.updateOne(
            {
                _id: dept._id,
            },
            {
                $set: updateData,
            }
        );
        return await this.deptRepo.findOne({ _id: dept._id });
    }
}