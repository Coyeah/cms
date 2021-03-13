import { Column, Entity, Index, ObjectID, ObjectIdColumn } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
@Entity("t_user")
@Index('dept_id', ['dept_id'])
export class UserEntity {
    @Field((type) => ID)
    @ObjectIdColumn({
        name: "_id",
        unique: true,
    })
    _id: string | ObjectID;

    @Field((type) => String || null, {
        nullable: true,
    })
    @Column("varchar", {
        nullable: true,
        length: 30,
        name: "email",
    })
    email: string | null;

    @Field((type) => String || null, {
        nullable: true,
    })
    @Column("varchar", {
        nullable: true,
        length: 50,
        name: "user_pwd",
    })
    user_pwd: string | null;

    @Field((type) => String || null, {
        nullable: true,
    })
    @Column("varchar", {
        nullable: true,
        length: 20,
        name: "user_nick",
    })
    user_nick: string | null;

    @Field((type) => String || null, {
        nullable: true,
    })
    @Column("bigint", {
        nullable: true,
        name: "dept_id",
    })
    dept_id: string;

    @Field((type) => Number, {
        defaultValue: 0,
    })
    @Column("tinyint", {
        default: () => 0,
        name: "user_type",
    })
    user_type: number;

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

    constructor(params?: any) {
        this.user_type = 0;
        const date = new Date();
        this.updated_time = date;
        this.created_time = date;
    }

    update() {
        this.updated_time = new Date();
    }
}
