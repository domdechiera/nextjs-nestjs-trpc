import { NestFactory } from '@nestjs/core';
import { AppModule } from '@backend/app.module';
import { TrpcRouter } from '@backend/trpc/trpc.router';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const trpc = app.get(TrpcRouter);
  trpc.applyMiddleware(app);
  await app.listen(process.env.PORT || 4000);
}
bootstrap();
