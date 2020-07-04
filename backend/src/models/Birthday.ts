import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('birthdays')
class Birthday {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('timestamp with time zone')
  date: Date;

  @Column()
  local: string;

  @Column()
  gift: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Birthday;
