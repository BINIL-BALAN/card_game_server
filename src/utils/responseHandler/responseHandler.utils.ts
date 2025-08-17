import { Response } from "express";
import statusMessages, { StatusCodeType } from "./responseMessages.utils";
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
    response: Omit<ApiResponseType, "data"> & { error?: any }
  ) => {
    return res.status(response.statusCode || 500).json({
      statusCode: response.statusCode || 500,
      message: response.message || statusMessages[response.statusCode || 500],
      data: null,
      success: false,
      ...(process.env.NODE_ENV === "development" && { error: response.error }),
    });
  },
};

export default responseHandler;
