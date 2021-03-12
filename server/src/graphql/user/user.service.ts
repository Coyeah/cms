import Container from "typedi";
import { MongoRepository } from "typeorm";
import { UserEntity } from "src/model/t_user.entity";
import { ConnectionToken } from "src/construct/initConnection";

export class UserService {
  private readonly userRepo: MongoRepository<UserEntity>;

  constructor() {
    const connection = Container.get(ConnectionToken);
    this.userRepo = connection.getMongoRepository(UserEntity);
  }

  // 查一个
  async findOne(id: string): Promise<UserEntity> {
    return await this.userRepo.findOne({ id });
  }

  // 查全部
  async findAll(): Promise<UserEntity[]> {
    return await this.userRepo.find();
  }

  // 增
  async create(user: UserEntity): Promise<UserEntity> {
    const res = this.userRepo.create(user);
    const result = await this.userRepo.save(res);
    return result;
  }

  // 删
  async delete(id: string): Promise<UserEntity> {
    const result = await this.userRepo.findOne({ id });
    await this.userRepo
      .createQueryBuilder("user")
      .delete()
      .from(UserEntity)
      .where("id = :id", { id })
      .execute();
    return result;
  }

  // 改
  async update(user: UserEntity): Promise<UserEntity> {
    await this.userRepo
      .createQueryBuilder("user")
      .update()
      .set({ ...user })
      .where("id = :id", { id: user.id })
      .execute();
    return await this.userRepo.findOne({ id: user.id });
  }
}
