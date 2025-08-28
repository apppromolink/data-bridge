import { FastifyInstance } from 'fastify';

import GrabberController from '../controllers/grabber.controller';

interface RequestQuery {
  url: string;
};

export default class GrabberRoutes {
  private controller: GrabberController;

  constructor() {
    this.controller = new GrabberController();
  }

  public register(fastify: FastifyInstance) {
    fastify.get<{ Querystring: RequestQuery }>('/api/grabber', (request, reply) => this.controller.getData(request, reply));
  }
};
