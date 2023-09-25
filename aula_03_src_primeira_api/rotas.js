const express = require('express');
const rotas = express();
const instrutores = require('./controladores/instrutores');


rotas.get('/', function (req, res) {
    res.send('menu principal.');
})

rotas.get('/instrutores', instrutores.listarInstrutores);
rotas.get('/instrutores/:id', instrutores.obterInstrutor);
rotas.post('/instrutores', instrutores.cadastrarInstrutor);
rotas.put('/instrutores/:id', instrutores.editarInstrutor);
rotas.patch('/instrutores/:id/status', instrutores.atualizarStatus);
rotas.delete('/instrutores/:id', instrutores.exluirInstrutor);






module.exports = rotas;