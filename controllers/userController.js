import { createNewConnection } from '../database/db.js';

export const getUsers = async (_, res) => {
    const sql = "select * from usuario";

    const conn = await createNewConnection();

    try {
        const [data] = await conn.query(sql);
        console.log("Dados obtidos com sucesso.");
        return res.status(200).json(data);
    } catch (err) {
        console.log("Erro ao obter os dados.");
        return res.status(500).json(err);
    } finally {
        if(conn){
            conn.end();
        }
    }
}

export const getUsersById = async (req, res) => {
    const sql = "select * from usuario where id = ?";

    const {id} = req.query;

    const conn = await createNewConnection();

    try {
        const [data] = await conn.query(sql, [id]);
        console.log("Dados obtidos com sucesso.");
        return res.status(200).json(data);
    } catch (err) {
        console.log("Erro ao obter os dados.");
        return res.status(500).json(err);
    } finally {
        if(conn){
            conn.end();
        }
    }
}

export const getUsersByNome = async (req, res) => {
    const sql = "select * from usuario where nome like ?";

    const {nome} = req.query;

    const conn = await createNewConnection();

    try {
        const [data] = await conn.query(sql, [nome + "%"]);
        console.log("Dados obtidos com sucesso.");
        return res.status(200).json(data);
    } catch (err) {
        console.log("Erro ao obter os dados.");
        return res.status(500).json(err);
    } finally {
        if(conn){
            conn.end();
        }
    }
}

export const addUser = async (req, res) => {
    const sql = "insert into usuario (nome) values (?)";

    const {nome} = req.body;

    const conn = await createNewConnection();

    try {
        await conn.query(sql, [nome]);
        console.log("Dados inseridos com sucesso.");
        return res.status(201).json({ message: "Usuário inserido com sucesso." });
    } catch (err) {
        console.log("Erro ao inserir os dados." + err);
        return res.status(500).json(err);
    } finally {
        if(conn){
            conn.end();
        }
    }
}

export const updateUser = async (req, res) => {
    const sql = "update usuario set nome = ? where id = ?";

    const {id, nome} = req.body;

    const conn = await createNewConnection();

    try {
        await conn.query(sql, [nome, id]);
        console.log("Dados altarados com sucesso.");
        return res.status(200).json({ message: "Usuário alterado com sucesso." });
    } catch (err) {
        console.log("Erro ao alterar os dados.");
        return res.status(500).json(err);
    } finally {
        if(conn){
            conn.end();
        }
    }
}

export const deleteUser = async (req, res) => {
    const sql = "delete from usuario where id = ?";

    const {id} = req.query;

    const conn = await createNewConnection();

    try {
        await conn.query(sql, [id]);
        console.log("Dados removidos com sucesso.");
        return res.status(200).json({ message: "Usuário removido com sucesso." });
    } catch (err) {
        console.log("Erro ao remover os dados.");
        return res.status(500).json(err);
    } finally {
        if(conn){
            conn.end();
        }
    }
}