import {Pool} from "pg"
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from ".";

export const pool = new Pool({
  user: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: DB_PORT, // default Postgres port
  database: DB_NAME
});

const query = (text:string,params:any) => pool.query(text,params)

export default query