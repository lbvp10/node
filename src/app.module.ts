import { Module } from '@nestjs/common';
import { AppController } from './co.com.lbvp.controller/app.controller';
import { AppService } from './co.com.lbvp.service/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
