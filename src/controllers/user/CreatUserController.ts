import { Request,Response } from "express";
import CreatUserService from "../../services/user/CreatUserService";

 class CreatUserController{
   
  async handle(req:Request,res:Response){
    const {name, email, password} = req.body as {name:string, email: string,password:string};
    
   const User = await  CreatUserService.execute({name,email,password});

   res.status(201).json(User);
  }

  

}

export default new CreatUserController;