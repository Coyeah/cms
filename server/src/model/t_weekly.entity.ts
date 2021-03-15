import { MaxLength } from "class-validator";
import { Field, ID, Int, ObjectType } from "type-graphql";
import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@ObjectType()
@Entity("t_weekly")
export class WeeklyEntity {
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

    @Field(() => Date, {
        nullable: false,
    })
    @Column("timestamp", {
        nullable: false,
        name: "start_date",
    })
    start_date: Date;

    @Field(() => Date, {
        nullable: false,
    })
    @Column("timestamp", {
        nullable: false,
        name: "end_date",
    })
    end_date: Date;

    @Field(() => Int, {
        nullable: false
    })
    @Column('int', {
        nullable: false,
        name: 'year'
    })
    year: number;

    @Field(() => Int, {
        nullable: false
    })
    @Column('tinyint', {
        nullable: false,
        name: 'month'
    })
    month: number;
}