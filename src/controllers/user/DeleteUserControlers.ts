import { Request,Response } from "express";
import DeleteUserService from "../../services/user/DeleteUserService";

class DeleteUserControlers {

    async delete(req:Request,res:Response){

      const {email} = req.body as {email:string}

      const User = await DeleteUserService.execute({email})

      return res.status(200).json(User);
    }

}

export default new DeleteUserControlers;