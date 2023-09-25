const { instrutores } = require('../bancodedados');

function listarInstrutores(req, resp) {
    return resp.status(200).json(instrutores);
}

function obterInstrutor(req, resp) {
    const { id } = req.params;
    const instrutor = instrutores.find(function (instrutor) {
        return instrutor.id === Number(id);
    })
    if (!instrutor) {
        return resp.status(404).json({ mensagem: 'Instrutor não encontrado.' });
    }
    return resp.status(200).json(instrutor);
}



module.exports = {
    listarInstrutores,
    obterInstrutor
}