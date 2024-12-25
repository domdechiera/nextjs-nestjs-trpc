import { Module } from '@nestjs/common';
import { AppController } from '@backend/app.controller';
import { AppService } from '@backend/app.service';
import { ConfigModule } from '@nestjs/config';
import { TrpcModule } from '@backend/trpc/trpc.module';

@Module({
  imports: [ConfigModule.forRoot(), TrpcModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
