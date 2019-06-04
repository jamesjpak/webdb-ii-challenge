const knex = require("knex");

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
    return db('zoos')
}

function findById(id) {
    return null
}

async function add(zoo) {
    return null
}

function update() {
    return null
}

function remove() {
    return null
}