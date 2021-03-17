import { MaxLength } from "class-validator";
import { BlogEntity } from "src/model/t_blog.entity";
import { Field, ID, InputType } from "type-graphql";

@InputType({ description: "updateBlogInput" })
export class UpdateBlogInput implements Partial<BlogEntity> {
    @Field(() => ID)
    _id: string;

    @Field(() => String, {
        nullable: true
    })
    @MaxLength(50)
    title?: string;

    @Field(() => String, {
        nullable: true
    })
    content?: string;

    @Field(() => String, {
        nullable: true,
    })
    kr_id?: string;

    @Field(() => [String], {
        nullable: true,
    })
    tag_ids?: string[];
}

@InputType({ description: "deleteBlogInput" })
export class DeleteBlogInput implements Partial<BlogEntity> {
    @Field(() => ID)
    _id: string;
}

@InputType({ description: "createBlogInput" })
export class CreateBlogInput implements Partial<BlogEntity> {

    @Field(() => String, {
        nullable: false
    })
    @MaxLength(50)
    title: string;

    @Field(() => String, {
        nullable: true
    })
    content?: string;

    @Field(() => String, {
        nullable: false,
    })
    user_id: string;

    @Field(() => String, {
        nullable: true,
    })
    kr_id?: string;

    @Field(() => [String], {
        nullable: true,
    })
    tag_ids?: string[];

}

@InputType({ description: "searchBlogInput" })
export class SearchBlogInput implements Partial<BlogEntity> {

    @Field(() => String, {
        nullable: false
    })
    @MaxLength(50)
    title: string;

    @Field(() => String, {
        nullable: true
    })
    content?: string;

    @Field(() => String, {
        nullable: true,
    })
    user_id?: string;

    @Field(() => String, {
        nullable: true,
    })
    kr_id?: string;

    @Field(() => [String], {
        nullable: true,
    })
    tag_ids?: string[];

}