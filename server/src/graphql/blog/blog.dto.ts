import { Blog, BlogTypeEnum } from "src/model/t_blog.model";
import {
    ObjectType as GqlType,
    InputType as GqlInputType,
    Field as GqlField,
    ArgsType as GqlArgsType,
    Int,
} from "type-graphql";

@GqlType()
export class ResultBlogList {
    @GqlField(() => Int)
    total: number;

    @GqlField(() => [Blog])
    list: Blog[];

    @GqlField(() => Int)
    page: number;

    @GqlField(() => Int)
    pageSize: number;

    @GqlField(() => Int)
    nextPage: number;
}


@GqlInputType({ description: "SearchBlogListInput" })
@GqlArgsType()
export class SearchBlogListInput implements Partial<Blog> {

    @GqlField(() => Int, {
        nullable: true,
        defaultValue: 1,
    })
    page?: number;

    @GqlField(() => Int, {
        nullable: true,
        defaultValue: 10,
    })
    pageSize?: number;

    @GqlField(() => String, {
        nullable: true,
    })
    title?: string;

    @GqlField(() => String, {
        nullable: true,
    })
    content?: string;

    @GqlField(() => Int)
    type: BlogTypeEnum;

    @GqlField(() => String)
    user_id: string;

    @GqlField(() => [String], {
        nullable: true,
    })
    tag_id?: string[];

    @GqlField(() => String, {
        nullable: true,
    })
    okr_id?: string;
}

@GqlInputType({ description: "CreateBlogInput" })
@GqlArgsType()
export class CreateBlogInput implements Partial<Blog> {

    @GqlField(() => String, {
        nullable: true,
    })
    title?: string;

    @GqlField(() => String, {
        nullable: true,
    })
    content?: string;

    @GqlField(() => Int, {
        nullable: true,
    })
    type?: BlogTypeEnum;

    @GqlField(() => String)
    user_id: string;

    @GqlField(() => [String], {
        nullable: true,
    })
    tag_id?: string[];

    @GqlField(() => String, {
        nullable: true,
    })
    okr_id?: string;
}