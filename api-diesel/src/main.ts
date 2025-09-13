import { ValidationPipe } from '@nestjs/common'
import { NestFactory, Reflector } from '@nestjs/core'
import { AppModule } from './app.module'
import { RolesGuard } from './auth/guards/roles.guard'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // Validation pipe
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true, // Remove fields that are not mapped in the DTO
  }))

  app.useGlobalGuards(new RolesGuard(app.get(Reflector)))

  app.enableCors({
    origin: '*',
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3000)
}

bootstrap()
