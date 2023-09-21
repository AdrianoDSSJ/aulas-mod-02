const professores = require('../bancodedados');

function filtrarProfessores(req, resp) {
    const { stack } = req.query;
    let resultado = professores;
    if (stack) {
        resultado = professores.filter(function (professor) {
            return professor.stack === stack;
        });
    }

    resp.send(resultado);
}



function encontrarUmProfessor(req, resp) {
    let professorEnontrado = 'Não Encontrado';
    for (const i of professores) {
        if (i.id === parseInt(req.params.id)) {

            professorEnontrado = i.nome;
        }
    }
    resp.send(professorEnontrado);
}

module.exports = {
    filtrarProfessores,
    encontrarUmProfessor
}