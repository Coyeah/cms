import { Tag } from "src/model/t_tag.model";
import { Arg, Mutation, Query } from "type-graphql";
import { PartialTagInput } from "./tag.dto";
import { TagService } from "./tag.service";

export class TagResolver {
    private readonly __tagService: TagService;

    constructor() {
        this.__tagService = new TagService();
    }

    @Query(() => Tag)
    async getTag(
        @Arg("id")
        id: string
    ): Promise<Tag> {
        return await this.__tagService.findById(id);
    }

    @Query(() => [Tag])
    async getAllTag(): Promise<Tag[]> {
        return await this.__tagService.find();
    }

    @Mutation(() => Tag)
    async createTag(
        @Arg("createOkrInput")
        args: PartialTagInput
    ): Promise<Tag> {
        return await this.__tagService.create(args);
    }

    @Mutation(() => Tag)
    async deleteTag(
        @Arg("id")
        id: string
    ): Promise<Tag> {
        return await this.__tagService.delete(id);
    }

    @Mutation(() => Tag)
    async updateTag(
        @Arg("id")
        id: string,
        @Arg("updateTagInput")
        args: PartialTagInput
    ): Promise<Tag> {
        return await this.__tagService.update(id, args);
    }
    
}