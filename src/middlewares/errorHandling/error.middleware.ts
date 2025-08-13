import { NextFunction,Request,Response } from "express";


const globalErrorHandling = (err:any,req:Request,res:Response,next:NextFunction)=>{
   if(res.headersSent){
     next(err)
   }
   res.error(err.statusCode || 500,err.message)
}

export default globalErrorHandling