import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity('t_user')
export class UserEntity {

    @PrimaryGeneratedColumn()
    no: number;

    @Field(type => ID)
    @Column({
        name: "id",
    })
    id: string;

    @Field(type => String, {
        nullable: true,
    })
    @Column("varchar", {
        nullable: true,
        length: 30,
        name: "email",
    })
    email: string | null;

    @Field(type => String, {
        nullable: true,
    })
    @Column("varchar", {
        nullable: true,
        length: 50,
        name: "user_pwd",
    })
    user_pwd: string | null;

    @Field(type => String, {
        nullable: true,
    })
    @Column("varchar", {
        nullable: true,
        length: 20,
        name: "user_nick",
    })
    user_nick: string | null;

    @Field(type => String, {
        nullable: true,
    })
    @Column('bigint', {
        nullable: true,
        name: 'dept_id',
    })
    dept_id: string;

    @Field(type => Number, {
        defaultValue: 0,
    })
    @Column('tinyint', {
        default: () => 0,
        name: 'user_type',
    })
    user_type: number;

    @Field(type => Date, {
        nullable: false,
    })
    @Column('timestamp', {
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP',
        name: 'create_time',
    })
    create_time: Date | null;

    @Field(type => Date, {
        nullable: false,
    })
    @Column('timestamp', {
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP',
        name: 'update_time',
    })
    update_time: Date;

}
