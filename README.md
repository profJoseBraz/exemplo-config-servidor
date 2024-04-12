# Exemplo de configuração de um servidor em node.js usando a biblioteca Express

Este repositório contém a configuração básica de um servidor Express. 

O objetivo dele é demonstrar aos alunos do curso de Programador Web do Senac de Campo Mourão - PR como funciona a configuração e o funcionamento de um servidor, ou seja, o backend da aplicação.

## Dependencias do Node

  - axios: **npm install axios**
  - cors: **npm install cors**
  - express: **npm install express**
  - mysql2: **npm install mysql2**
  - nodemon: **npm install nodemon**

## Banco de dados

Para este projeto será necessário instalar o banco de dados MySQL, disponível para download em: https://dev.mysql.com/downloads/installer/.

Após a instalação do MySQL crie um banco de dados chamado **db_exemplo** contendo uma tabela chamada **usuario**.

### Script
    create database db_exemplo;

    create table usuario(
      id int primary key,
      nome varchar(45) not null
    );

Obs: o script pode ser executado diretamente no **MySQL Command Line Client** ou em um gerenciador de banco de dados como **MySQL Workbench** ou **DBeaver**.

## Ambiente de teste

Para realizar o teste dos endpoints recomenda-se a utilização da ferramenta **Postman**, disponível para download em: https://www.postman.com/downloads/. 
