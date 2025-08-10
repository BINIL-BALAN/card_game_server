import { RequestHandler, Response } from "express";
import pinoHttp from "pino-http";
import logger from "@utils/logger/logger.utils";

// Create HTTP logger middleware
 const httpLogger = pinoHttp({
  logger,
  customLogLevel: function (res:Response, err:any) {
    if(err instanceof Error) return "error";
    if (res.statusCode >= 500) return 'error';
    if (res.statusCode >= 400) return 'warn';
    return 'info';
  },
  serializers: {
    req: (req) => ({
      method: req.method,
      url: req.url,
      params: req.params,
      query: req.query,
      body: req.body 
    }),
    res: (res) => ({
      statusCode: res.statusCode
    })
  }
}) as unknown as RequestHandler;

export default httpLogger
