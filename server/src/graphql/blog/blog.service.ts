import { QueryFindOptions } from "mongoose";
import { Blog, BlogModel } from "src/model/t_blog.model";
import { ResultBlogList } from "./blog.dto";

export interface PaginationOptions extends QueryFindOptions {
    page: number;
    pageSize: number;
}

export class BlogService {
    // 查
    findById = async (id: string): Promise<Blog> =>
        await BlogModel.findById(id).exec();

    // 条件查 + 页数限制
    async findBy(
        filter: Partial<Blog>,
        options: PaginationOptions = { page: 1, pageSize: 10 }
    ): Promise<ResultBlogList> {
        const { page, pageSize, ...opt } = options;
        const [count, result] = await Promise.all([
            BlogModel.countDocuments(filter),
            BlogModel.find(filter, null, {
                limit: pageSize,
                skip: (page - 1) * pageSize,
                sort: { updatedAt: "desc" },
                ...opt,
            }),
        ]);

        let nextPage = -1;
        if ((page + 1) * pageSize < count) nextPage = page + 1;
        return {
            page,
            pageSize,
            list: result,
            total: count,
            nextPage,
        };
    }

    // 增
    create = async (target: Partial<Blog>): Promise<Blog> => {
        const { _id: id } = await BlogModel.create(target as Blog);
        return await this.findById(id);
    };

    // 删
    delete = async (id: string): Promise<Blog> =>
        await BlogModel.findOneAndDelete({ id });

    // 改
    async update(_id: string, target: Partial<Blog>): Promise<Blog> {
        return await BlogModel.findOneAndUpdate(
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
