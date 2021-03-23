import { Okr } from "src/model/t_okr.model";
import {
    InputType as GqlInputType,
    Field as GqlField,
    ArgsType as GqlArgsType,
} from "type-graphql";

@GqlInputType({ description: "CreateOkrInput" })
@GqlArgsType()
export class CreateOkrInput implements Partial<Okr> {

    @GqlField(() => String)
    title: string; // o / kr 内容

    @GqlField(() => String)
    user_id: string;

    @GqlField(() => String, {
        nullable: true,
        defaultValue: null,
    })
    o_id?: string; // 针对 kr

    @GqlField(() => String)
    interval_id: string; // 时间区间
}

@GqlInputType({ description: "UpdateOkrInput"})
@GqlArgsType()
export class UpdateOkrInput implements Partial<Okr> {

    @GqlField(() => String, {
        nullable: true,
    })
    title?: string; // o / kr 内容


    @GqlField(() => String, {
        nullable: true,
        defaultValue: null,
    })
    o_id?: string; // 针对 kr

    @GqlField(() => String, {
        nullable: true,
    })
    interval_id?: string; // 时间区间
}