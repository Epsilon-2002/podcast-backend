import { Module } from '@nestjs/common';
import { HealthModule, SearchModule, EpisodeModule } from './modules';

@Module({
  imports: [HealthModule, SearchModule, EpisodeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
