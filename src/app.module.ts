import { Module } from '@nestjs/common';
import {
  HealthModule,
  SearchModule,
  EpisodeModule,
  ElasticsearchModule,
} from './modules';

@Module({
  imports: [HealthModule, SearchModule, EpisodeModule, ElasticsearchModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
