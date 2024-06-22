import { Query } from "../../connection/connection";

class DeleteUserRepositories {

    async  delete({email}){
           const sql = `DELETE FROM users WHERE email = '${email}'`;
           const User = await Query(sql);
           return User;
    }

}

export default new DeleteUserRepositories;