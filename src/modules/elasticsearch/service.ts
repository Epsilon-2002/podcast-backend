// elasticsearch.service.ts
import { Injectable } from '@nestjs/common';
import { ElasticsearchService as NestElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export class ElasticsearchService {
  constructor(
    private readonly elasticsearchService: NestElasticsearchService,
  ) {}

  async search(index: string, query: any) {
    return await this.elasticsearchService.search({
      index,
      body: query,
    });
  }

  async index(index: string, id: string, body: any) {
    return await this.elasticsearchService.index({
      index,
      id,
      body,
    });
  }

  async update(index: string, id: string, body: any) {
    return await this.elasticsearchService.update({
      index,
      id,
      body: {
        doc: body,
      },
    });
  }

  async delete(index: string, id: string) {
    return await this.elasticsearchService.delete({
      index,
      id,
    });
  }
}
