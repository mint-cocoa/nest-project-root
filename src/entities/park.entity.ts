// src/entities/park.entity.ts
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Facility } from './facility.entity';
import { Ticket } from './ticket.entity';

@Entity('parks')
export class Park {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  park_name: string;

  @Column()
  location: string;

  @OneToMany(() => Facility, (facility) => facility.id)
  facilities: Facility[];

  @OneToMany(() => Ticket, (ticketbase) => ticketbase.id)
  @JoinColumn({ name: 'ticketbase' })
  ticketbase: TicketBase[];
}
