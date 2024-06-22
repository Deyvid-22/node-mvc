import DeleteUserRepositories from "../../repositories/user/DeleteUserRepositories";


class DeleteUserService {

    async execute({email}){
         
       if(!email) throw new Error("Prencha o campo email!")

       const User = await DeleteUserRepositories.delete({email});
       
       return User
    }

}

export default new DeleteUserService;
