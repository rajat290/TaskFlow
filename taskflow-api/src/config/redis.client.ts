import { createClient } from 'redis';
import { ConfigService } from './config.service';

export const createRedisClient = (configService: ConfigService) => {
  const client = createClient({
    socket: {
      host: configService.get('REDIS_HOST'),
      port: configService.get('REDIS_PORT'),
    },
    password: configService.get('REDIS_PASSWORD'),
  });

  client.on('error', (err) => console.error('Redis Client Error', err));
  client.on('connect', () => console.log('Redis Client Connected'));

  return client;
};
