const knex = require("knex");
const router = require("express").Router();


const knexConfig = {
    client: "sqlite3",
    connection: {
        filename: "./data/lambda.db3"
    },
    useNullAsDefault: true,
    debug: true
}

const db = knex(knexConfig);

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}

function find() {
    return null
}

function findById() {
    return null
}

function add() {
    return null
}

function update() {
    return null
}

function remove() {
    return null
}