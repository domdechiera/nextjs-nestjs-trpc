import { Module } from '@nestjs/common';
import { TrpcRouter } from '@backend/trpc/trpc.router';
import { TrpcService } from '@backend/trpc/trpc.service';

@Module({
  imports: [],
  providers: [TrpcService, TrpcRouter],
})
export class TrpcModule {}