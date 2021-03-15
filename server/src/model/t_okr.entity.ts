import { MaxLength } from "class-validator";
import { Field, ID, ObjectType } from "type-graphql";
import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@ObjectType()
@Entity("t_okr")
export class OkrEntity {
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
        nullable: false,
    })
    @MaxLength(50)
    @Column('varchar', {
        nullable: false,
        length: 50,
        name: 'title'
    })
    title: string;

    @Field(() => String, {
        nullable: false,
    })
    @Column('varchar', {
        nullable: false,
        name: 'user_id'
    })
    user_id: string;

    @Field(() => String, {
        nullable: true,
    })
    @Column('varchar', {
        nullable: true,
        name: 'o_id'
    })
    o_id?: string;

    @Field(() => String, {
        nullable: false,
    })
    @Column('varchar', {
        nullable: false,
        name: 'weekly_id'
    })
    weekly_id: string;
}