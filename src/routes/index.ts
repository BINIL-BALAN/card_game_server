import express from "express";
import userRouter from "@routes/user/user.route";
const router = express.Router();

router.use("/user", userRouter);

export default router