import Fastify from 'fastify';

import { HOST, PORT } from './configs/enviroment.config';
import GrabberRoutes from './routes/grabber.route';

const fastify = Fastify({ logger: true });

const grabberRoutes = new GrabberRoutes();

grabberRoutes.register(fastify);

fastify.get('/', async () => ({ message: 'Hello World' }));

const start = async () => {
  try {
    await fastify.listen({ port: PORT, host: HOST });

    console.log(`Server running at http://localhost:${PORT}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
