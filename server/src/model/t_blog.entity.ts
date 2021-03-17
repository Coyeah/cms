import { MaxLength } from "class-validator";
import { Field, ID, ObjectType } from "type-graphql";
import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@ObjectType()
@Entity("t_blog")
export class BlogEntity {
    @Field(() => ID)
    @ObjectIdColumn({
        name: "_id",
        unique: true,
    })
    _id: string | ObjectID;

    @Field(() => Date, {
        nullable: false,
    })
    @Column("timestamp", {
        nullable: false,
        default: () => "CURRENT_TIMESTAMP",
        name: "created_time",
    })
    created_time: Date;

    @Field(() => Date, {
        nullable: false,
    })
    @Column("timestamp", {
        nullable: false,
        default: () => "CURRENT_TIMESTAMP",
        name: "updated_time",
    })
    updated_time: Date;

    @Field(() => String, {
        nullable: false
    })
    @MaxLength(50)
    @Column("string", {
        nullable: false,
        length: 50,
        name: 'title'
    })
    title: string;

    @Field(() => String, {
        nullable: true
    })
    @Column("string", {
        nullable: true,
        name: 'content'
    })
    content?: string;

    @Field(() => String, {
        nullable: true,
    })
    @Column("string", {
        nullable: true,
        name: "kr_id",
    })
    kr_id?: string;

    @Field(() => String, {
        nullable: false,
    })
    @Column("string", {
        nullable: false,
        name: "user_id",
    })
    user_id: string;

    @Field(() => [String], {
        nullable: true,
    })
    @Column("array", {
        nullable: true,
        name: "tag_ids",
    })
    tag_ids?: string[];
}