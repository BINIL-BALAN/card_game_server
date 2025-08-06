import express from 'express';
import cors from 'cors';
// import routes from '@routes/index';
const app = express();

app.use(cors())
app.use(express.json());

export default app;


