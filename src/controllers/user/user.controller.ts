import { UserServices } from "@services/index";
import { Request, Response } from "express";

class UserController {
  private userServices: UserServices;
  constructor() {
    this.userServices = new UserServices();
  }

  getUser = async (req: Request, res: Response)=> {
    // req.logger.info("request received !");
    try {
      const { id } = req.params;
      const data = await this.userServices.getUser(Number(id));
      res.success({ statusCode: 200, data});
    } catch (error:any) {
      console.log(error)
      res.error(error)
    }
  }
  save(req: Request, res: Response) {}

  edit(req: Request, res: Response) {}
}

export default UserController;
