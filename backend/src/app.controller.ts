import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Client } from 'pg'; // Add

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('health')
  async getHealth() {
    const client = new Client({ connectionString: process.env.DATABASE_URL });
    try {
      await client.connect();
      await client.query('SELECT 1');
      return { status: 'ok', message: 'Database connection successful' };
    } catch (error) {
      return {
        status: 'error',
        message: 'Database connection failed',
        error: (error as Error).message,
      };
    } finally {
      await client.end();
    }
  }
}
