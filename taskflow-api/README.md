# TaskFlow API

A comprehensive task management API built with NestJS, TypeScript, PostgreSQL, and Redis.

## Features

- 🔐 **Authentication & Authorization** - JWT-based auth with role-based access control
- 📝 **Task Management** - Create, read, update, and delete tasks
- 👥 **User Management** - User registration and profile management
- 📊 **Health Checks** - Application health monitoring
- 🔄 **Queue System** - Background job processing with BullMQ
- 🗄️ **Database** - PostgreSQL with TypeORM
- ⚡ **Caching** - Redis for caching and session storage
- 📚 **API Documentation** - Swagger/OpenAPI documentation
- 🐳 **Docker Support** - Containerized development environment

## Tech Stack

- **Framework**: NestJS
- **Language**: TypeScript
- **Database**: PostgreSQL
- **Cache**: Redis
- **Queue**: BullMQ
- **ORM**: TypeORM
- **Validation**: class-validator
- **Documentation**: Swagger/OpenAPI
- **Testing**: Jest

## Prerequisites

- Node.js (v18 or higher)
- PostgreSQL
- Redis
- Docker (optional)

## Installation

### Using Docker (Recommended)

1. Clone the repository:
```bash
git clone <repository-url>
cd taskflow-api
```

2. Start the services:
```bash
docker-compose up -d
```

3. Install dependencies:
```bash
npm install
```

4. Copy environment variables:
```bash
cp .env.example .env
```

5. Start the application:
```bash
npm run start:dev
```

### Manual Installation

1. Install dependencies:
```bash
npm install
```

2. Set up PostgreSQL and Redis:
```bash
# PostgreSQL
createdb taskflow

# Redis
redis-server
```

3. Configure environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Run the application:
```bash
npm run start:dev
```

## API Documentation

Once the application is running, visit:
- Swagger UI: http://localhost:3000/api/docs
- Health Check: http://localhost:3000/health

## API Endpoints

### Authentication
- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login user
- `GET /auth/profile` - Get user profile

### Tasks
- `GET /tasks` - Get all tasks for authenticated user
- `POST /tasks` - Create a new task
- `GET /tasks/:id` - Get a specific task
- `PATCH /tasks/:id` - Update a task
- `DELETE /tasks/:id` - Delete a task

### Health
- `GET /health` - Application health check

## Environment Variables

```env
# Database
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=postgres
DATABASE_NAME=taskflow

# Redis
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=

# JWT
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRES_IN=7d

# Server
PORT=3000
NODE_ENV=development
```

## Development

### Running Tests
```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov
```

### Database Migrations
```bash
# Generate migration
npm run migration:generate -- -n MigrationName

# Run migrations
npm run migration:run

# Revert migration
npm run migration:revert
```

## Project Structure

```
taskflow-api/
├── src/
│   ├── app.module.ts
│   ├── main.ts
│   ├── common/
│   │   ├── filters/
│   │   │   └── http-exception.filter.ts
│   │   └── decorators/
│   │       └── roles.decorator.ts
│   ├── config/
│   │   ├── config.module.ts
│   │   ├── config.service.ts
│   │   ├── data-source.ts
│   │   └── redis.client.ts
│   ├── auth/
│   │   ├── auth.module.ts
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   ├── dtos/
│   │   │   ├── login.dto.ts
│   │   │   └── register.dto.ts
│   │   ├── strategies/
│   │   │   ├── jwt.strategy.ts
│   │   │   └── local.strategy.ts
│   │   └── guards/
│   │       └── jwt.guard.ts
│   ├── users/
│   │   ├── users.module.ts
│   │   ├── users.service.ts
│   │   ├── users.repository.ts
│   │   └── entities/
│   │       └── user.entity.ts
│   ├── tasks/
│   │   ├── tasks.module.ts
│   │   ├── tasks.controller.ts
│   │   ├── tasks.service.ts
│   │   ├── tasks.repository.ts
│   │   ├── dtos/
│   │   │   ├── create-task.dto.ts
│   │   │   └── update-task.dto.ts
│   │   └── entities/
│   │       └── task.entity.ts
│   ├── queue/
│   │   ├── queue.module.ts
│   │   └── bullmq.provider.ts
│   └── health/
│       ├── health.module.ts
│       └── health.controller.ts
├── .env.example
├── package.json
├── tsconfig.json
├── bunfig.toml
├── docker-compose.yml
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
