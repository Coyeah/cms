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
  async create(user: Partial<UserEntity>): Promise<UserEntity> {
    // ===== //
    const date = new Date();
    user.created_time = user.updated_time = date;
    // ===== //

    const res = this.userRepo.create(user);
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
  async update(user: Partial<UserEntity>): Promise<UserEntity> {
    user._id = ObjectID(user._id);
    const updateData = {
      ...user,
      updated_time: new Date(),
    };
    delete updateData._id;

    await this.userRepo.updateOne(
      {
        _id: user._id,
      },
      {
        $set: updateData,
      }
    );
    return await this.userRepo.findOne({ _id: user._id });
  }
}
