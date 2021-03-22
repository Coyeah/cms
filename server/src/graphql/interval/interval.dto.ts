import { Interval } from "src/model/t_interval.model";
import {
    InputType as GqlInputType,
    Field as GqlField,
    ArgsType as GqlArgsType,
    Int,
} from "type-graphql";

export enum SearchIntervalStatusType {
    BOTH = 0, // 搜索区间包括起始时间与结束时间
    ONLY_START = 1, // 搜索区间仅包括起始时间
    ONLY_END = 2, // 搜索区间仅包括结束时间
}

@GqlInputType({ description: "SearchIntervalInput" })
@GqlArgsType()
export class SearchIntervalInput {
    @GqlField(() => String)
    start_at: string;

    @GqlField(() => String)
    end_at: string;

    @GqlField(() => Int, {
        defaultValue: 0,
        nullable: true,
    })
    status: SearchIntervalStatusType = SearchIntervalStatusType.BOTH;
}

@GqlInputType({ description: "CreateIntervalInput" })
@GqlArgsType()
export class CreateIntervalInput {
    @GqlField(() => String)
    start_at: string;

    @GqlField(() => String)
    end_at: string;
}

@GqlInputType({ description: "UpdateIntervalInput" })
@GqlArgsType()
export class UpdateIntervalInput {
    @GqlField(() => String, {
        nullable: true,
    })
    start_at?: string;

    @GqlField(() => String, {
        nullable: true,
    })
    end_at?: string;
}
