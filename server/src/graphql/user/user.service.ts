import Container from "typedi";
import { MongoRepository } from "typeorm";
import { ObjectID } from "mongodb";
import { UserEntity } from "src/model/t_user.entity";
import { ConnectionToken } from "src/construct/initConnection";

export class UserService {
  private readonly userRepo: MongoRepository<UserEntity>;

  constructor() {
    const connection = Container.get(ConnectionToken);
    this.userRepo = connection.getMongoRepository(UserEntity);
  }

  // 查一个
  async findOne(_id: string): Promise<UserEntity> {
    _id = new ObjectID(_id);
    return await this.userRepo.findOne({ _id });
  }

  // 查全部
  async findAll(): Promise<UserEntity[]> {
    return await this.userRepo.find();
  }

  // 增
  async create(target: Partial<UserEntity>): Promise<UserEntity> {
    // ===== //
    const date = new Date();
    target.created_time = target.updated_time = date;
    // ===== //

    const res = this.userRepo.create(target);
    const result = await this.userRepo.save(res);
    return result;
  }

  // 删
  async delete(_id: string): Promise<UserEntity> {
    _id = new ObjectID(_id);
    const result = await this.userRepo.findOne({ _id });
    await this.userRepo.deleteOne({ _id })
    return result;
  }

  // 改
  async update(target: Partial<UserEntity>): Promise<UserEntity> {
    target._id = ObjectID(target._id);
    const updateData = {
      ...target,
      updated_time: new Date(),
    };
    delete updateData._id;

    await this.userRepo.updateOne(
      {
        _id: target._id,
      },
      {
        $set: updateData,
      }
    );
    return await this.userRepo.findOne({ _id: target._id });
  }
}
