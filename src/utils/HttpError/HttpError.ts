import { StatusCodeType } from "@utils/responseHandler/responseMessages.utils";

class HttpError extends Error {
  statusCode: StatusCodeType;
  constructor(message: string, statusCode: StatusCodeType) {
    super(message);
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, HttpError.prototype);
  }
}

export default HttpError
