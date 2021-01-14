import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToOne,
  JoinColumn,
  BeforeInsert,
} from 'typeorm';
import { Profile } from './userProfile.entity';
import * as bcrypt from 'bcrypt';
import { timeStamp } from 'console';
const BCRYPT_HASH_ROUND = 8;

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ unique: true })
  username: string;

  @BeforeInsert()
  async beforeInsert() {
    this.password = await bcrypt.hash(this.password, BCRYPT_HASH_ROUND);
  }

  @CreateDateColumn({ nullable: true })
  createdAt: Date;

  @CreateDateColumn({ nullable: true })
  updatedAt: Date;

  @OneToOne(() => Profile)
  @JoinColumn()
  profile: Profile;
}
