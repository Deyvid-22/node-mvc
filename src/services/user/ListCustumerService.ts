import ListCustumerRepositories from "../../repositories/user/ListCustumerRepositories";



class ListCustumerService {

     async execute(){
        const User = await ListCustumerRepositories.findAll();
        return User;
     }   
}


export default new ListCustumerService;