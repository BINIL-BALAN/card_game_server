import { Response } from "express";
import statusMessages, { StatusCodeType } from "./responseMessages.utils";
import HttpError from "@utils/HttpError/HttpError";
type ApiResponseType = {
  statusCode?: StatusCodeType;
  message?: string;
  data: any;
};

const responseHandler = {
  success: (res: Response, response: ApiResponseType) => {
    return res.status(response.statusCode || 200).json({
      data: response.data,
      success: true,
      message: response.message || statusMessages[response.statusCode || 200],
      statusCode: response?.statusCode || 200,
    });
  },

  error: (
    res: Response,
    error: HttpError
  ) => {
    return res.status(error?.statusCode || 500).json({
      statusCode: error?.statusCode || 500,
      message: error?.message || statusMessages[error?.statusCode || 500],
      data: null,
      success: false,
      ...(process.env.NODE_ENV === "development" && { error }),
    });
  },
};

export default responseHandler;
