import Container from "typedi";
import { ObjectID } from "mongodb";
import { MongoRepository } from "typeorm";
import { ConnectionToken } from "src/construct/initConnection";
import { TagEntity } from "src/model/t_tag.entity";


export class TagService {
    private readonly tagRepo: MongoRepository<TagEntity>;

    constructor() {
        const connection = Container.get(ConnectionToken);
        this.tagRepo = connection.getMongoRepository(TagEntity);
    }

    // 查一个
    async findOne(_id: string): Promise<TagEntity> {
        _id = new ObjectID(_id);
        return await this.tagRepo.findOne({ _id });
    }

    // 查全部
    async findAll(): Promise<TagEntity[]> {
        return await this.tagRepo.find();
    }

    // 增
    async create(dept: Partial<TagEntity>): Promise<TagEntity> {
        // ===== //
        const date = new Date();
        dept.created_time = dept.updated_time = date;
        // ===== //

        const res = this.tagRepo.create(dept);
        const result = await this.tagRepo.save(res);
        return result;
    }

    // 删
    async delete(_id: string): Promise<TagEntity> {
        _id = new ObjectID(_id);
        const result = await this.tagRepo.findOne({ _id });
        await this.tagRepo.deleteOne({ _id })
        return result;
    }

    // 改
    async update(target: Partial<TagEntity>): Promise<TagEntity> {
        target._id = ObjectID(target._id);
        const updateData = {
            ...target,
            updated_time: new Date(),
        };
        delete updateData._id;

        await this.tagRepo.updateOne(
            {
                _id: target._id,
            },
            {
                $set: updateData,
            }
        );
        return await this.tagRepo.findOne({ _id: target._id });
    }
}