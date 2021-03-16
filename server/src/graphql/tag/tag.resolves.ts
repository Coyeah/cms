import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { TagEntity } from "src/model/t_tag.entity";
import { TagService } from './tag.service';
import { CreateTagInput, DeleteTagInput, UpdateTagInput } from "./tag.dto";

@Resolver(() => TagEntity)
export class TagResolvers {
    private readonly tagService: TagService;

    constructor() {
        this.tagService = new TagService();
    }

    @Query(() => TagEntity)
    async getTag(
        @Arg("_id")
        _id: string
    ): Promise<TagEntity> {
        return await this.tagService.findOne(_id);
    }

    @Query(() => [TagEntity])
    async getTags(): Promise<TagEntity[]> {
        return await this.tagService.findAll();
    }

    @Mutation(() => TagEntity)
    async createTag(
        @Arg('createTagInput')
        args: CreateTagInput
    ): Promise<TagEntity> {
        return await this.tagService.create(args);
    }

    @Mutation(() => TagEntity)
    async deleteTag(
        @Arg('deleteTagInput')
        args: DeleteTagInput
    ): Promise<TagEntity> {
        return await this.tagService.delete(args._id);
    }

    @Mutation(() => TagEntity)
    async updateTag(
        @Arg('updateTagInput')
        args: UpdateTagInput
    ): Promise<TagEntity> {
        return await this.tagService.update(args);
    }
}