import { Query } from "../../connection/connection";

class ListCustumerRepositores {

   async findAll(){
       const sql = "SELECT * FROM users;"
       const User = await Query(sql)
    
        return User;
   }
   
}

export default new ListCustumerRepositores;