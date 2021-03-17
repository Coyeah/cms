import { ConnectionToken } from "src/construct/initConnection";
import { BlogEntity } from "src/model/t_blog.entity";
import Container from "typedi";
import { ObjectID } from "mongodb";
import { MongoRepository } from "typeorm";


export class BlogService {
    private readonly blogRepo: MongoRepository<BlogEntity>;

    constructor() {
        const connection = Container.get(ConnectionToken);
        this.blogRepo = connection.getMongoRepository(BlogEntity);
    }

    // 查一个
    async findOne(_id: string): Promise<BlogEntity> {
        _id = new ObjectID(_id);
        return await this.blogRepo.findOne({ _id });
    }

    // 查全部
    async findAll(target?: Omit<Partial<BlogEntity>, '_id'>): Promise<BlogEntity[]> {
        return await this.blogRepo.find(target);
    }

    // 增
    async create(target: Partial<BlogEntity>): Promise<BlogEntity> {
        // ===== //
        const date = new Date();
        target.created_time = target.updated_time = date;
        // ===== //

        const res = this.blogRepo.create(target);
        const result = await this.blogRepo.save(res);
        return result;
    }

    // 删
    async delete(_id: string): Promise<BlogEntity> {
        _id = new ObjectID(_id);
        const result = await this.blogRepo.findOne({ _id });
        await this.blogRepo.deleteOne({ _id })
        return result;
    }

    // 改
    async update(target: Partial<BlogEntity>): Promise<BlogEntity> {
        target._id = ObjectID(target._id);
        const updateData = {
            ...target,
            updated_time: new Date(),
        };
        delete updateData._id;

        await this.blogRepo.updateOne(
            {
                _id: target._id,
            },
            {
                $set: updateData,
            }
        );
        return await this.blogRepo.findOne({ _id: target._id });
    }
}