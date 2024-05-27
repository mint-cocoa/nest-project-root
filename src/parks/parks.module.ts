import { Module } from '@nestjs/common';
import { ParksController } from './parks.controller';

@Module({
  controllers: [ParksController]
})
export class ParksModule {}
