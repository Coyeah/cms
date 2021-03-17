import { WeeklyEntity } from "src/model/t_weekly.entity";
import { Field, ID, InputType, Int } from "type-graphql";

@InputType({ description: "createWeelyInput" })
export class CreateWeeklyInput implements Partial<WeeklyEntity> {

    @Field(() => Date, {
        nullable: false,
    })
    start_date?: Date;

    @Field(() => Date, {
        nullable: false,
    })
    end_date?: Date;

}

@InputType({ description: "deleteWeeklyInput" })
export class DeleteWeeklyInput implements Partial<WeeklyEntity> {

    @Field(() => ID)
    _id: string;
}

@InputType({ description: "updateWeeklyInput" })
export class UpdateWeeklyInput implements Partial<WeeklyEntity> {

    @Field(() => ID)
    _id: string;

    @Field(() => Date, {
        nullable: true,
    })
    start_date: Date;

    @Field(() => Date, {
        nullable: true,
    })
    end_date: Date;
}

@InputType({ description: "searchWeeklyInput" })
export class SearchWeeklyInput implements Partial<WeeklyEntity> {

    @Field(() => Int, {
        nullable: true,
    })
    year?: number;

    @Field(() => Int, {
        nullable: true,
    })
    month?: number;
}