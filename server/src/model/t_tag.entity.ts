import { MaxLength } from "class-validator";
import { Field, ID, ObjectType } from "type-graphql";
import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@ObjectType()
@Entity("t_tag")
export class TagEntity {

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
    @MaxLength(20)
    @Column("string", {
        nullable: false,
        length: 20,
        name: "name",
    })
    name: string;

}