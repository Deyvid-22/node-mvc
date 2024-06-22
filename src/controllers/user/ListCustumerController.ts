import ListCustumerService from "../../services/user/ListCustumerService";
import { Request, Response } from "express";
class ListCustumerController {

    async getAll(req:Request,res:Response) {

       const User = await ListCustumerService.execute();

       return res.status(200).json(User);
    }

}

export default new ListCustumerController;
