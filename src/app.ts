import express from 'express';
import cors from 'cors';
import router from '@routes/index';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from '@config/swagger.config';
import { responseMiddleware } from '@middlewares/globalResponse/globalResponse.middleware';
const app = express();
app.use(cors())
app.use(express.json());
app.use(responseMiddleware)
app.use("/app",router)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))
export default app;


