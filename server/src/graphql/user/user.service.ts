import { UserModel, User } from "src/model/t_user.model";
import md5 from "blueimp-md5";

const pwdHandler = (target: Partial<User>): Partial<User> => {
    if (target.pwd) target.pwd = md5(target.pwd);
    return target;
};

export class UserService {
    // 查
    findById = async (id: string): Promise<User> =>
        await UserModel.findById(id).exec();

    // 查全部
    find = async (target: Partial<User>): Promise<User[]> =>
        await UserModel.find(target).exec();;

    // 增
    async create(target: Partial<User>): Promise<User> {
        pwdHandler(target);

        const { _id: id } = await UserModel.create(target as User);
        return await this.findById(id);
    }

    // 删
    delete = async (id: string): Promise<User> =>
        await UserModel.findOneAndRemove({ id });

    // 改
    async update(_id: string, target: Partial<User>): Promise<User> {
        pwdHandler(target);

        return await UserModel.findOneAndUpdate(
            {
                _id,
            },
            target,
            {
                new: true,
                strict: true,
            }
        );
    }
}
