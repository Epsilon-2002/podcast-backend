import { Test, TestingModule } from '@nestjs/testing';
import { EpisodeController } from './controller';

describe('EpisodeController', () => {
  let episodeController: EpisodeController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EpisodeController],
    }).compile();

    episodeController = app.get<EpisodeController>(EpisodeController);
  });

  describe('/episode/test', () => {
    it('should return "Episode!', () => {
      expect(episodeController.test()).toBe('Episode!');
    });
  });
});
