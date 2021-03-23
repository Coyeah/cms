import { BlogService } from "./blog.service";
import { Arg, Mutation, Query } from "type-graphql";
import { Blog } from "src/model/t_blog.model";
import { SearchBlogListInput, CreateBlogInput, ResultBlogList } from "./blog.dto";

export class BlogResolver {
    private readonly __blogService: BlogService;

    constructor() {
        this.__blogService = new BlogService();
    }

    @Query(() => Blog)
    async GetBlog(
        @Arg("id")
        id: string
    ): Promise<Blog> {
        return await this.__blogService.findById(id);
    }

    @Query(() => ResultBlogList)
    async getBlogBy(
        @Arg("SearchBlogListInput")
        args: SearchBlogListInput
    ): Promise<ResultBlogList> {
        const { page = 1, pageSize = 10, ...rest } = args;
        return await this.__blogService.findBy(rest, {
            page,
            pageSize
        });
    }

    @Mutation(() => Blog)
    async createBlog(
        @Arg("CreateBlogInput")
        args: CreateBlogInput
    ): Promise<Blog> {
        return await this.__blogService.create(args);
    }
}
