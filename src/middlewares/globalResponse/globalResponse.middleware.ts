import responseHandler from "@utils/responseHandler/responseHandler.utils";
import {
  StatusCodeType,
} from "@utils/responseHandler/responseMessages.utils";
import { Response, Request, NextFunction } from "express";

 export const responseMiddleware = (
  req: Request,
  res: Response<any>,
  next: NextFunction
) => {
  res.success = (data: any,  statusCode?: StatusCodeType,message?: string,) => {
    return responseHandler.success(res, {
      data,
      message,
      statusCode,
    });
  };

  res.error = (message?: string, statusCode?: StatusCodeType) => {
    return responseHandler.error(res, {
      message,
      statusCode,
    });
  };

  next();
};