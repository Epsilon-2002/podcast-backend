import { Controller, Get } from '@nestjs/common';

@Controller('search')
export class SearchController {
  @Get('test')
  test() {
    return 'Search!';
  }
}
