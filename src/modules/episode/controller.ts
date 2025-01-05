import { Controller, Get } from '@nestjs/common';

@Controller('episode')
export class EpisodeController {
  @Get('test')
  test() {
    return 'Episode!';
  }
}
