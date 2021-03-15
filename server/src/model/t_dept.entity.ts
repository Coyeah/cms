import { MaxLength } from "class-validator";
import { Field, ID, ObjectType } from "type-graphql";
import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@ObjectType()
@Entity("t_dept")
export class DeptEntity {
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
        nullable: false,
    })
    @MaxLength(20)
    @Column("varchar", {
        nullable: false,
        length: 20,
        name: "dept_name",
    })
    dept_name: string;

    @Field(type => String || null, {
        nullable: true,
    })
    @Column("varchar", {
        nullable: true,
        name: "parent_dept_id",
    })
    parent_dept_id: string | null;
}
