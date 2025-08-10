import { Request, Response } from 'express';

export const createUser = async (_:Request,res:Response):Promise<void>=>{
  res.success({key:"sample data"},202); 
}