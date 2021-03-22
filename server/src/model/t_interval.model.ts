import { prop as Property, getModelForClass } from "@typegoose/typegoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { Field as GqlField, ObjectType as GqlType, ID } from "type-graphql";

@GqlType()
export class Interval extends TimeStamps {
    @GqlField(() => ID)
    readonly _id: string;

    @GqlField(() => Date)
    @Property()
    start_at: Date;

    @GqlField(() => Date)
    @Property()
    end_at: Date;
}

export const IntervalModel = getModelForClass(Interval, {
    schemaOptions: {
        collection: "t_interval",
    },
});
