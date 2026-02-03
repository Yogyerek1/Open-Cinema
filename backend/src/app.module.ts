import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { MoviesModule } from './movies/movies.module';
import { ShowModule } from './show/show.module';

@Module({
  imports: [PrismaModule, MoviesModule, ShowModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
