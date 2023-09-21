//importações
const express = require('express');
const app = express();

const { filtrarProfessores, encontrarUmProfessor } = require('./Controladores/professores');

//intermediarios
app.use(function (req, resp, next) {
    console.log('passei no primeiro intermediario');
    next();
});

//intermediarios de rota
function intermediarioDaRota(req, resp, next) {
    console.log('passei no intermediario de rota');
    next();
};



//funções
app.get('/professores', intermediarioDaRota, filtrarProfessores);

app.get('/professores/:id', encontrarUmProfessor);

app.get('/', function (req, resp) {
    resp.send('Pagina Inicial!!!');
})



//porta para leitura e receber requisição
app.listen(3000, console.log('aula 02'));
