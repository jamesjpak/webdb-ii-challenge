const knex = require("knex");
const router = require("express").Router();
const Zoos = require('./zoos-model');

const knexConfig = {
    client: "sqlite3",
    connection: {
        filename: "./data/lambda.db3"
    },
    useNullAsDefault: true,
    debug: true
}

const db = knex(knexConfig);



module.exports = router;