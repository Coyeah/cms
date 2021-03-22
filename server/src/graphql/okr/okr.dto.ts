import { Okr } from "src/model/t_okr.model";
import {
    InputType as GplInputType,
    Field as GqlField,
} from "type-graphql";

@GplInputType({ description: "CreateOkrInput" })
export class CreateOkrInput implements Partial<Okr> {

    @GqlField(() => String)
    title: string; // o / kr 内容

    @GqlField(() => String)
    user_id: string;

    @GqlField(() => String, {
        nullable: true
    })
    o_id?: string; // 针对 kr

    @GqlField(() => String)
    interval_id: string; // 时间区间
}