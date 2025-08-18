import express from 'express';
import cors from 'cors';
import router from '@routes/index';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from '@config/swagger.config';
import { responseMiddleware } from '@middlewares/globalResponse/globalResponse.middleware';
import cookieParser from "cookie-parser";
import globalErrorHandling from '@middlewares/errorHandling/globalerror.middleware';
import googleAuth from "@config/googleAuth/auth.json"
// import httpLogger from '@middlewares/logger/logger.middleware';
console.log(googleAuth)
const app = express();
app.use(cors())
app.use(express.json());
app.use(cookieParser());
app.use(responseMiddleware)
// app.use(httpLogger)
app.use("/app",router)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))
app.use(globalErrorHandling)
export default app;



