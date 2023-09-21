const express = require('express');

const app = express(3000);

const professores = [
    {
        id: 1, nome: 'guido', stack: 'Backend'
    },
    {
        id: 2, nome: 'Dani', stack: 'Frontend'
    },
    {
        id: 3, nome: 'Diego', stack: 'Frontend'
    },
    {
        id: 4, nome: 'Vidal', stack: 'Backend'
    }

];
app.get('/professores', function (req, resp) {
    resp.send(professores);
})

app.get('/professores/:id', function (req, resp) {
    let professorEnontrado = 'Não Encontrado';
    for (const i of professores) {
        if (i.id === parseInt(req.params.id)) {

            professorEnontrado = i.nome;
        }
    }
    resp.send(professorEnontrado);
})



app.get('/', function (req, resp) {
    resp.send('Pagina Inicial!!!');
})




app.listen(3000, console.log('aula 02'));
