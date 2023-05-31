const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./Config/config');

const url = config.connString;

mongoose.connect(url);

mongoose.connection.on('error', (err) => {
    console.log(`Erro na conexão com o banco de dados: ${err}`);
});

mongoose.connection.on('disconnected', () => {
    console.log('Aplicação desconectada do banco de dados!');
});

mongoose.connection.on('connected', () => {
    console.log('Aplicação conectada corretamente ao banco de dados!');
});

//Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Routes
const usersRoute = require('./Routes/users');
app.use('/users', usersRoute);

app.listen(3000);

module.exports = app;