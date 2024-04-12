import { db } from '../database/db.js';

export const getUsers = (_, res) => {
    const sql = "select * from usuario";

    db.query(sql, (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados dos usuários obtidos com sucesso.");
            return res.status(200).json(data);
        }
    });
}