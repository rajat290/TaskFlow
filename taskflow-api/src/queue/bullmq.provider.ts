import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';
import { InjectQueue } from '@nestjs/bullmq';

@Injectable()
export class BullmqProvider {
  constructor(@InjectQueue('email') private emailQueue: Queue) {}

  async addEmailJob(data: any) {
    await this.emailQueue.add('send-email', data);
  }
}
