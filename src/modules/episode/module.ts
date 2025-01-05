import { Module } from '@nestjs/common';
import { EpisodeController } from './controller';

@Module({
  imports: [],
  controllers: [EpisodeController],
  providers: [],
})
export class EpisodeModule {}
