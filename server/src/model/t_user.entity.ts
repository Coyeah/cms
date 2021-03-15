import { Column, Entity, Index, ObjectID, ObjectIdColumn } from "typeorm";
import { ObjectType, Field, ID, Int } from "type-graphql";
import { MaxLength, Max, Min } from "class-validator";

@ObjectType()
@Entity("t_user")
export class UserEntity {
    @Field((type) => ID)
    @ObjectIdColumn({
        name: "_id",
        unique: true,
    })
    _id: string | ObjectID;

    @Field((type) => Date, {
        nullable: false,
    })
    @Column("timestamp", {
        nullable: false,
        default: () => "CURRENT_TIMESTAMP",
        name: "created_time",
    })
    created_time: Date;

    @Field((type) => Date, {
        nullable: false,
    })
    @Column("timestamp", {
        nullable: false,
        default: () => "CURRENT_TIMESTAMP",
        name: "updated_time",
    })
    updated_time: Date;

    @Field((type) => String, {
        nullable: true,
    })
    @MaxLength(30)
    @Column("varchar", {
        nullable: true,
        length: 30,
        name: "email",
    })
    email?: string;

    @Field((type) => String, {
        nullable: true,
    })
    @MaxLength(50)
    @Column("varchar", {
        nullable: true,
        length: 50,
        name: "user_pwd",
    })
    user_pwd?: string;

    @Field((type) => String, {
        nullable: true,
    })
    @MaxLength(20)
    @Column("varchar", {
        nullable: true,
        length: 20,
        name: "user_nick",
    })
    user_nick?: string;

    @Field((type) => String, {
        nullable: true,
    })
    @Column("varchar", {
        nullable: true,
        name: "dept_id",
    })
    dept_id?: string;

    @Field((type) => Int, {
        defaultValue: 0,
    })
    @Max(10)
    @Min(0)
    @Column("tinyint", {
        default: () => 0,
        name: "user_type",
    })
    user_type?: number;

    @Field((type) => Int, {
        defaultValue: 0,
    })
    @Max(10)
    @Min(0)
    @Column("tinyint", {
        default: () => 0,
        name: "use_type",
    })
    use_type?: number;

    @Field((type) => Int, {
        defaultValue: 0,
    })
    @Column("tinyint", {
        default: () => 0,
        name: "user_level",
    })
    user_level?: number;
}
