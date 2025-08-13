import express from "express";
import userRouter from "@routes/user/user.route";
const router = express.Router();


/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a single JSONPlaceholder user.
 *     description: Retrieve a single JSONPlaceholder user. Can be used to populate a user profile when prototyping or testing an API.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: integer        
 */
router.use("/user", userRouter);

export default router