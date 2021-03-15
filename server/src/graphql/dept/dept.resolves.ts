import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { DeptEntity } from "src/model/t_dept.entity";
import { DeptService } from "./dept.service";
import { CreateDeptInput, DeleteDeptInput, UpdateDeptInput } from "./dept.dto";

@Resolver((of) => DeptEntity)
export class DeptResolvers {
    private readonly deptService: DeptService;

    constructor() {
        this.deptService = new DeptService();
    }

    @Query((returns) => DeptEntity)
    async getDept(
        @Arg("_id")
        _id: string
    ): Promise<DeptEntity> {
        return await this.deptService.findOne(_id);
    }

    @Query((returns) => DeptEntity)
    async getDepts(): Promise<DeptEntity[]> {
        return await this.deptService.findAll();
    }

    @Mutation(returns => DeptEntity)
    async createDept(
        @Arg('createDeptInput')
        args: CreateDeptInput
    ): Promise<DeptEntity> {
        return await this.deptService.create(args);
    }

    @Mutation(returns => DeptEntity)
    async deleteDept(
        @Arg('deleteDeptInput')
        args: DeleteDeptInput
    ): Promise<DeptEntity> {
        return await this.deptService.delete(args._id);
    }

    @Mutation(returns => DeptEntity)
    async updateDept(
        @Arg('updateDeptInput')
        args: UpdateDeptInput
    ): Promise<DeptEntity> {
        return await this.deptService.update(args);
    }
}
