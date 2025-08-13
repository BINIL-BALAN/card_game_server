import express from 'express';
import UserController from '@controllers/user/user.controller';
const userRouter = express.Router();

const user = new UserController()


userRouter.get("/",user.getUser);

export default userRouter