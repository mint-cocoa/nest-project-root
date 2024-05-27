// src/entities/facility.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { Park } from './park.entity';

@Entity('facilities')
export class Facility {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Park, (park) => park.facilities)
  park: Park;

  @Column()
  type: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  capacity: number;

  @Column({ nullable: true })
  is_available: number;
}
