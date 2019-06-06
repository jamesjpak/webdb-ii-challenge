const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(express.json());
server.use(helmet());

// endpoints here
const zoosRouter = require('../zoos/zoos-router');
server.use('/api/zoos', zoosRouter)


module.exports = server;