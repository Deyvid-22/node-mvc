import {Query} from "../../connection/connection";
import bcrypt from "bcryptjs";
class CreatUserRepositories {

  async creat({name, email, password}){
    
     password = await bcrypt.hash(password,10)

     const sql = `INSERT INTO crud.users (name, email,password) VALUES ('${name}', '${email}', '${password}');`
     const user =  Query(sql)

     return user;
     }

}

export default new CreatUserRepositories;