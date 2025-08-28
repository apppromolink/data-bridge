import { FastifyReply, FastifyRequest } from 'fastify';

import GrabberService from '../services/grabber.service';

interface RequestQuery {
  url: string;
};

export default class GrabberController {
  private service: GrabberService;

  constructor() {
    this.service = new GrabberService();
  }

  public async getData(request: FastifyRequest<{ Querystring: RequestQuery }>, reply: FastifyReply) {
    const { url } = request.query;

    if (!url) {
      return reply.status(400).send({ error: 'URL query param is required' });
    }

    try {
      const data = await this.service.getData(url);
      return reply.send(data);
    } catch (error) {
      return reply.status(500).send({ error: 'Internal Error: ' + error });
    }
  }
}
