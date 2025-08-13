import "express";
import { StatusCodeType } from "@utils/responseHandler/responseMessages.utils";
import type { Logger } from "pino";
declare module "express-serve-static-core" {
  namespace Express {
    interface Request {
      logger: Logger;
    }
    interface Response {
      success: (
        data: any,
        statusCode?: StatusCodeType,
        message?: string
      ) => this;
      error: (statusCode?: StatusCodeType,message?: string, ) => this;
    }
  }
}
