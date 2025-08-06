import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const DB_URL = process.env.DB_URL || 'database_ulr';
const HOST = process.env.HOST || 'localhost'
export { PORT, DB_URL, HOST };
