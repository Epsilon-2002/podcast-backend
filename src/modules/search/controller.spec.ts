import { Test, TestingModule } from '@nestjs/testing';
import { SearchController } from './controller';

describe('SearchController', () => {
  let searchController: SearchController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SearchController],
    }).compile();

    searchController = app.get<SearchController>(SearchController);
  });

  describe('/search/test', () => {
    it('should return "Search!', () => {
      expect(searchController.test()).toBe('Search!');
    });
  });
});
