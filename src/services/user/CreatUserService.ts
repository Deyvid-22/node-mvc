import CreatUserRepositories from "../../repositories/user/CreatUserRepositories";

import { Query } from "../../connection/connection";

interface CreatCustomerProps {
  name: string;
  email: string;
  password: string;
}

class CreatUserService {
  
  async execute({ name, email, password }: CreatCustomerProps) {
    
    
    if (!name || !email || !password) throw new Error("Preencha todos os campos!")
  
      
    const Verify = async () => {
        
        try {
          const sql = `SELECT COUNT(*) AS count FROM users WHERE email = '${email}';`
          const verify = await Query(sql);
          const Count = verify[0].count;
          
          if (Count > 0) return {sucess:false, message: "usuário já existente!" }
          
        const User = await CreatUserRepositories.creat({ name, email, password });
        return User;

      } catch {
        return {message:"error no servidor"}
      }
    }
    return Verify();
  }
}


export default new CreatUserService;