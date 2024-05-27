import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { User } from './entities/user.entity';
import { TicketModule } from './tickets/tickets.module';
import { UsersModule } from './users/users.module';

import { Park } from './entities/park.entity';
import { Facility } from './entities/facility.entity';
import { Ticket } from './entities/ticket.entity';
import { ParksService } from './parks/parks.service';
import { ParksModule } from './parks/parks.module';
import { FacilitiesService } from './facilities/facilities.service';
import { FacilitiesModule } from './facilities/facilities.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Ticket, Park, Facility]),
    UsersModule,
    TicketModule,
    ParksModule,
    FacilitiesModule,
  ],
  controllers: [AppController],
  providers: [AppService, ParksService, FacilitiesService],
})
export class AppModule {}
