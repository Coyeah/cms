import { Field, ID, InputType } from "type-graphql";
import { MaxLength } from "class-validator";
import { DeptEntity } from "src/model/t_dept.entity";

@InputType({ description: 'createDeptInput' })
export class CreateDeptInput implements Partial<DeptEntity> {

    @Field(type => String, {
        nullable: false
    })
    @MaxLength(20)
    dept_name: string;


    @Field(type => String, {
        nullable: true,
    })
    parent_dept_id?: string;
}

@InputType({ description: "deleteDeptInput" })
export class DeleteDeptInput implements Partial<DeptEntity> {
    @Field((type) => ID)
    _id: string;
}

@InputType({ description: 'updateDeptInput' })
export class UpdateDeptInput implements Partial<DeptEntity> {
    @Field((type) => ID)
    _id: string;

    @Field(type => String, {
        nullable: true
    })
    @MaxLength(20)
    dept_name?: string;


    @Field(type => String, {
        nullable: true,
    })
    parent_dept_id?: string;

}