import { Okr, OkrModel } from "src/model/t_okr.model";

export class OkrService {
    // 查
    async findById(id: string): Promise<Okr> {
        return await OkrModel.findById(id).exec();
    }
    // 查全部
    find = async (target: Partial<Okr>): Promise<Okr[]> =>
        await OkrModel.find(target).exec();;

    // 增
    create = async (target: Partial<Okr>): Promise<Okr> => {
        const { _id: id } = await OkrModel.create(target as Okr);
        return await this.findById(id);
    }

    // 删
    delete = async (id: string): Promise<Okr> =>
        await OkrModel.findOneAndRemove({ id });

    // 改
}
