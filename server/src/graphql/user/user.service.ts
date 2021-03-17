import md5 from 'blueimp-md5';
import Container from "typedi";
import { MongoRepository } from "typeorm";
import { ObjectID } from "mongodb";
import { UserEntity } from "src/model/t_user.entity";
import { ConnectionToken } from "src/construct/initConnection";

type TargetType = Omit<Partial<UserEntity>, '_id'>;

export class UserService {
  private readonly userRepo: MongoRepository<UserEntity>;

  constructor() {
    const connection = Container.get(ConnectionToken);
    this.userRepo = connection.getMongoRepository(UserEntity);
  }

  // 查一个
  async findOne(target: Partial<UserEntity>): Promise<UserEntity> {
    if (target._id) {
      target._id = new ObjectID(target._id);
    }
    return await this.userRepo.findOne(target);
  }

  // 查全部
  async findAll(): Promise<UserEntity[]> {
    return await this.userRepo.find();
  }

  // 增
  async create(target: TargetType): Promise<UserEntity> {
    // ===== //
    const date = new Date();
    target.created_time = target.updated_time = date;
    // ===== //
    if (target.user_pwd) {
      target.user_pwd = md5(target.user_pwd);
    }
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
  async update(_id: string, target: TargetType): Promise<UserEntity> {
    _id = ObjectID(_id);
    const updateData: Partial<UserEntity> = {
      ...target,
      updated_time: new Date(),
    };

    await this.userRepo.updateOne(
      {
        _id,
      },
      {
        $set: updateData,
      }
    );
    return await this.userRepo.findOne({ _id });
  }
}
