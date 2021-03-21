import { WeeklyEntity } from "src/model/t_weekly.entity";
import { Field, ID, InputType } from "type-graphql";
import { FindAllWeeklysType } from "./weekly.service";

@InputType({ description: "createWeelyInput" })
export class CreateWeeklyInput implements Partial<WeeklyEntity> {

    @Field(() => String, {
        nullable: false,
    })
    start_date: string;

    @Field(() => String, {
        nullable: false,
    })
    end_date: string;

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

    @Field(() => String, {
        nullable: true,
    })
    start_date: string;

    @Field(() => String, {
        nullable: true,
    })
    end_date: string;
}
