import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dtos/create-task.dto';
import { UpdateTaskDto } from './dtos/update-task.dto';

@Injectable()
export class TasksRepository {
  constructor(
    @InjectRepository(Task)
    private readonly repository: Repository<Task>,
  ) {}

  async findAllByUser(userId: string): Promise<Task[]> {
    return this.repository.find({
      where: { userId },
      order: { createdAt: 'DESC' },
    });
  }

  async findOneById(id: string): Promise<Task | undefined> {
    return this.repository.findOne({ where: { id } });
  }

  async save(task: Task): Promise<Task> {
    return this.repository.save(task);
  }

  async create(taskData: CreateTaskDto): Promise<Task> {
    const task = this.repository.create(taskData);
    return this.repository.save(task);
  }
}
