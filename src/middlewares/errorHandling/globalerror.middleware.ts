import { NextFunction,Request,Response } from "express";


const globalErrorHandling = (err:any,_:Request,res:Response,next:NextFunction)=>{
   if(res.headersSent){
     next(err)
   }
   res.error({statusCode:err.statusCode || 500,message:err.message,error:err})
}

export default globalErrorHandling