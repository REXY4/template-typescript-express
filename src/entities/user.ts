import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntities {
  @PrimaryGeneratedColumn({
    type : 'bigint',
    name : 'user_id',
  })
    id! : number

  @Column({
    nullable: false,
    default: '',
  })
    name! : string

  @Column({
    nullable: false,
    default: '',
  })
    email! : string

  @Column({
    nullable: false,
    default: '',
  })
    password! : string
}
