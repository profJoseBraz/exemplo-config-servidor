import mysql from 'mysql2'

export const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "admin",
    database: "db_exemplo"
});

db.connect((err) => {
    if(err){
        console.log(`Erro de conexão com o banco de dados: ${err}`);
        return;
    }

    console.log(`Conexão bem-sucedida com o banco de dados MySQL.`);
});