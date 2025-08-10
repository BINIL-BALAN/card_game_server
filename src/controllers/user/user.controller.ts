import { Request, Response } from 'express';
export const createUser = async (req:Request,res:Response):Promise<void>=>{
  req.logger.info("request received !")
  res.success({key:"sample data"},202); 
}