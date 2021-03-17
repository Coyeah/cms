import { BlogEntity } from "src/model/t_blog.entity";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { BlogService } from "./blog.service";
import { CreateBlogInput, DeleteBlogInput, SearchBlogInput, UpdateBlogInput } from './blog.dto';

@Resolver(() => BlogEntity)
export class BlogResolvers {
    private readonly blogService: BlogService;

    constructor() {
        this.blogService = new BlogService();
    }

    @Query(() => BlogEntity)
    async getBlog(
        @Arg("_id")
        _id: string
    ): Promise<BlogEntity> {
        return await this.blogService.findOne(_id);
    }

    @Query(() => [BlogEntity])
    async getBlogs(
        @Arg("searchBlogInput")
        args?: SearchBlogInput
    ): Promise<BlogEntity[]> {
        return await this.blogService.findAll(args);
    }

    @Mutation(() => BlogEntity)
    async deleteBlog(
        @Arg('deleteBlogInput')
        args: DeleteBlogInput
    ): Promise<BlogEntity> {
        return await this.blogService.delete(args._id);
    }

    @Mutation(() => BlogEntity)
    async createBlog(
        @Arg('createBlogInput')
        args: CreateBlogInput
    ): Promise<BlogEntity> {
        return await this.blogService.create(args);
    }

    @Mutation(() => BlogEntity)
    async updateBlog(
        @Arg('updateBlogInput')
        args: UpdateBlogInput
    ): Promise<BlogEntity> {
        return await this.blogService.update(args);
    }
}