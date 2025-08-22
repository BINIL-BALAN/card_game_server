import HttpError from "@utils/HttpError/HttpError";
import { NextFunction,Request,Response } from "express";


const globalErrorHandling = (err:HttpError,_:Request,res:Response,next:NextFunction)=>{
   if(res.headersSent){
     next(err)
   }
   res.error(err)
}

export default globalErrorHandling