import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  gender: string;

  @Column({ nullable: true })
  age: number;

  @CreateDateColumn({ nullable: true })
  createdAt: Date;

  @CreateDateColumn({ nullable: true })
  updatedAt: Date;
}
