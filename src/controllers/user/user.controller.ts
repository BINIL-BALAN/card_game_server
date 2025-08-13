import { UserServices } from "@services/index";
import { Request, Response } from "express";

class UserController {
  private userServices: UserServices;
  constructor() {
    this.userServices = new UserServices();
  }

  getUser(req: Request, res: Response) {
    req.logger.info("request received !");
    res.success({ key: "sample data" }, 202);
  }

  save(req: Request, res: Response){
     
  }

  edit(req: Request, res: Response){

  }

}

export default UserController;
