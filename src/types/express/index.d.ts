import "express";
import { StatusCodeType } from "@utils/responseHandler/responseMessages.utils";

declare module "express-serve-static-core" {
  interface Response {
    success: (data: any, statusCode?: StatusCodeType,message?: string,) => this;
    error: (message?: string, statusCode?: StatusCodeType) => this;
  }
}