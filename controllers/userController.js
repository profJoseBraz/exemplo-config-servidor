import { db } from '../database/db.js';

//Por não ser necessário informar nenhum dado adicional para a listagem de usuários, não é necessário passar valores no corpo (body) da requisição
export const getUsers = (_, res) => {
    const sql = "select * from usuario";

    db.query(sql, (err, data) => {
        if (err) {
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        } else {
            console.log("Dados dos usuários obtidos com sucesso.");
            return res.status(200).json(data);
        }
    });
}

export const getUsersById = (req, res) => {
    const sql = "select * from usuario where id = ?";

    const { id } = req.query;

    db.query(sql, [id], (err, data) => {
        if (err) {
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        } else {
            console.log("Dados obtidos com sucesso.");
            return res.status(200).json(data);
        }
    });
}

export const getUsersByNome = (req, res) => {
    const sql = "select * from usuario where nome like ?";

    const { nome } = req.query;

    db.query(sql, [nome], (err, data) => {
        if (err) {
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        } else {
            console.log("Dados obtidos com sucesso.");
            return res.status(200).json(data);
        }
    });
}

//Os dados são enviados no corpo da requisição
export const addUser = (req, res) => {
    const sql = "insert into usuario (nome) values (?)";

    const { nome } = req.body;

    db.query(sql, [nome], (err, data) => {
        if (err) {
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        } else {
            console.log("Usuário cadastrado com sucesso.");
            return res.status(201).json(data);
        }
    });
}

//Os dados são enviados no corpo da requisição (body), pois para se alterar um recurso é necessário tanto a identificação (ID) quanto as informações que serão efetivamente alteradas. 
export const updateUser = (req, res) => {
    const sql = "update usuario set nome = ? where id = ?";

    const { id, nome } = req.body;

    db.query(sql, [nome, id], (err, data) => {
        if (err) {
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        } else {
            console.log("Dados do usuário atualizados com sucesso.");
            return res.status(201).json(data);
        }
    });
}

//Os dados são enviados via parâmetro de URL, pois para realizar a exclusão de um recurso, neste caso um usuário, não é necessário passar nenhum valor adicionar. Ou seja, apenas o ID é o suficiente para realizar a exclusão.
export const deleteUser = (req, res) => {
    const sql = "delete from usuario where id = ?";

    const { id } = req.query;

    db.query(sql, [id], (err, data) => {
        if (err) {
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        } else {
            console.log("Usuário removido com sucesso.");
            return res.status(201).json(data);
        }
    });
}