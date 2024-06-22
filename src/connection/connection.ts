import mysql from "mysql";

const connect = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connect.connect()

export const Query = (sql:string)=>{

    return new Promise((resolve,reject)=>{
        connect.query(sql,(erro,results)=>{

            if(erro){
                reject(Error);
            }else{
                resolve(results);
            }
        })

    })
}



export default connect ;