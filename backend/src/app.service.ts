import { Injectable } from '@nestjs/common';
import { Client } from 'pg';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async healthCheck() {
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
