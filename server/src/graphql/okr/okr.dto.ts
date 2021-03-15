import { Field, InputType, ID, Int } from "type-graphql";
import { OkrEntity } from "src/model/t_okr.entity";
import { MaxLength } from "class-validator";

@InputType({ description: "createOkrInput" })
export class CreateOkrInput implements Partial<OkrEntity> {
    @Field(() => String, {
        nullable: false,
    })
    @MaxLength(50)
    title: string;

    @Field(() => String, {
        nullable: false,
    })
    user_id: string;

    @Field(() => String, {
        nullable: true,
    })
    o_id?: string;

    @Field(() => String, {
        nullable: false,
    })
    weekly_id: string;
}

@InputType({ description: "deleteOkrInput" })
export class DeleteOkrInput implements Partial<OkrEntity> {
    @Field(() => ID)
    _id: string;
}

@InputType({ description: "updateOkrInput" })
export class UpdateOkrInput implements Partial<OkrEntity> {
    @Field(() => ID)
    _id: string;

    @Field(() => String, {
        nullable: true,
    })
    @MaxLength(50)
    title?: string;

    @Field(() => String, {
        nullable: true,
    })
    user_id: string;

    @Field(() => String, {
        nullable: true,
    })
    o_id?: string;

    @Field(() => String, {
        nullable: true,
    })
    weekly_id?: string;
}