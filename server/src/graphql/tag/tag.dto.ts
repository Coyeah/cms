import { Field, InputType, ID, Int } from "type-graphql";
import { MaxLength } from "class-validator";
import { TagEntity } from "src/model/t_tag.entity";

@InputType({ description: 'createTagInput'})
export class CreateTagInput implements Partial<TagEntity> {
    @Field(() => String, {
        nullable: false,
    })
    @MaxLength(50)
    name: string;
}

@InputType({ description: "deleteTagInput" })
export class DeleteTagInput implements Partial<TagEntity> {
    @Field(() => ID)
    _id: string;
}

@InputType({ description: 'updateTagInput'})
export class UpdateTagInput implements Partial<TagEntity> {
    @Field(() => ID)
    _id: string;

    @Field(() => String, {
        nullable: false,
    })
    @MaxLength(50)
    name: string;
}
