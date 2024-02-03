import { DataSource } from 'typeorm';

// TODO Change these values to ENV vars
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || ''),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME,
  entities: ['./src/entities/*.{ts,js}'],
  migrations: ['./src/database/migrations/*.{ts,js}'],
  synchronize: false,
  migrationsTableName: 'migrations',
});
