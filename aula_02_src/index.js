const express = require('express');

const app = express(3000);


app.get('/', function (req, resp) {
    resp.send('Pagina Inicial!!!');
})




app.listen(3000, console.log('aula 02'));