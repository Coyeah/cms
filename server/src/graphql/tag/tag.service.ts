import { Tag, TagModel } from "src/model/t_tag.model";

export class TagService {
    // 查
    findById = async (id: string): Promise<Tag> =>
        await TagModel.findById(id).exec();

    // 查全部
    find = async (): Promise<Tag[]> =>
        await TagModel.find().exec();;

    // 增
    create = async (target: Partial<Tag>): Promise<Tag> => {
        const { _id: id } = await TagModel.create(target as Tag);
        return await this.findById(id);
    }

    // 删
    delete = async (id: string): Promise<Tag> =>
        await TagModel.findOneAndRemove({ id });

    // 改
    update = async (_id: string, target: Partial<Tag>): Promise<Tag> =>
        await TagModel.findOneAndUpdate(
            {
                _id
            },
            target,
            {
                new: true,
                strict: true,
            }
        )
}