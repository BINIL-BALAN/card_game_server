import { Response } from 'express';
import statusMessages from './responseMessages.utils';
type ApoResponseType = {
    statusCode: keyof typeof statusMessages,
    message?: string,
    data?: any,
}

export const success = (res:Response, response:ApoResponseType)=>{
  return res.status(response.statusCode).json({
    statusCode: response.statusCode,
    message: response?.message || statusMessages[response.statusCode],
    data: response.data,
    success:true
  })
}

export const error = (res:Response, response:ApoResponseType)=>{
  return res.status(response.statusCode).json({
    statusCode: response.statusCode,
    message: response?.message || statusMessages[response.statusCode],
    data: response.data,
    success:false
  })
}