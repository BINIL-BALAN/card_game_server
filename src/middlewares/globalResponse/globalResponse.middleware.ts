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
  res.success = (response:{data: any,  statusCode?: StatusCodeType,message?: string,}) => {
    return responseHandler.success(res, response);
  };

  res.error = (e:{statusCode?: StatusCodeType,message?: string,error?:any} ) => {
    return responseHandler.error(res, e);
  };

  next();
};