import { Field, ID, InputType } from "type-graphql";
import { MaxLength } from "class-validator";
import { DeptEntity } from "src/model/t_dept.entity";

@InputType({ description: 'createDeptInput' })
export class CreateDeptInput implements Partial<DeptEntity> {
    @Field(() => String, {
        nullable: false
    })
    @MaxLength(20)
    dept_name: string;


    @Field(() => String, {
        nullable: true,
    })
    parent_dept_id?: string;
}

@InputType({ description: "deleteDeptInput" })
export class DeleteDeptInput implements Partial<DeptEntity> {
    @Field(() => ID)
    _id: string;
}

@InputType({ description: 'updateDeptInput' })
export class UpdateDeptInput implements Partial<DeptEntity> {
    @Field(() => ID)
    _id: string;

    @Field(() => String, {
        nullable: true
    })
    @MaxLength(20)
    dept_name?: string;


    @Field(() => String, {
        nullable: true,
    })
    parent_dept_id?: string;

}