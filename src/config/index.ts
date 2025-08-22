import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const DB_URL = process.env.DB_URL || 'database_ulr';
const HOST = process.env.HOST || 'localhost'
const DB_USER = process.env.DB_USER || "" 
const DB_PASSWORD = process.env.DB_PASSWORD || ""
const DB_HOST = process.env.DB_HOST || ""
const DB_PORT = Number(process.env.DB_PORT || "")
const DB_NAME = process.env.DB_NAME || ""
 
export { PORT, DB_URL, HOST,DB_USER,DB_PASSWORD,DB_HOST,DB_PORT,DB_NAME};
