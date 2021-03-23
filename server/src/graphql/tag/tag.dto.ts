
import { Tag } from "src/model/t_tag.model";
import {
    InputType as GqlInputType,
    Field as GqlField,
    ArgsType as GqlArgsType,
} from "type-graphql";

@GqlInputType({ description: "CreateAndUpdateTagInput"})
@GqlArgsType()
export class PartialTagInput implements Partial<Tag> {

    @GqlField(() => String)
    name: string; 
}
