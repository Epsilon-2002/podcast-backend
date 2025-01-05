import { Module } from '@nestjs/common';
import { SearchController } from './controller';

@Module({
  imports: [],
  controllers: [SearchController],
  providers: [],
})
export class SearchModule {}
