const { instrutores } = require('../bancodedados');
let { identificador } = require('../bancodedados');

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

function cadastrarInstrutor(req, resp) {
    const { nome, email, status } = req.body;
    if (!nome) {
        return resp.status(400).json({ mensagem: "o nome é obrigatorio" })
    }
    if (!email) {
        return resp.status(400).json({ mensagem: "o email é obrigatorio" })
    }
    const instrutor = {
        id: identificador++,
        nome,
        email,
        status: status ?? true
    }

    instrutores.push(instrutor);

    return resp.status(201).json(instrutor);

}

function editarInstrutor(req, resp) {
    const { id } = req.params;

    const { nome, email, status } = req.body;
    console.log(status);
    if (!nome) {
        return resp.status(400).json({ mensagem: "o nome é obrigatorio" })
    }
    if (!email) {
        return resp.status(400).json({ mensagem: "o email é obrigatorio" })
    }

    if (status === undefined) {
        return resp.status(400).json({ mensagem: "o status é obrigatorio" })
    }

    const instrutor = instrutores.find(function (instrutor) {
        return instrutor.id === Number(id);
    })
    if (!instrutor) {
        return resp.status(404).json({ mensagem: 'Instrutor não encontrado.' });
    }

    instrutor.nome = nome;
    instrutor.email = email;
    instrutor.status = status;

    return resp.status(204).send();

}

function atualizarStatus(req, resp) {
    const { id } = req.params;
    const { status } = req.body;

    const instrutor = instrutores.find(function (instrutor) {
        return instrutor.id === Number(id);
    })
    if (!instrutor) {
        return resp.status(404).json({ mensagem: 'Instrutor não encontrado.' });
    }

    if (status === undefined) {
        return resp.status(400).json({ mensagem: "o status é obrigatorio" })
    }

    instrutor.status = status;

    return resp.status(204).send();

}

function exluirInstrutor(req, resp) {
    const { id } = req.params;

    const instrutor = instrutores.find(function (instrutor) {
        return instrutor.id === Number(id);
    })
    if (!instrutor) {
        return resp.status(404).json({ mensagem: 'Instrutor não encontrado.' });
    }

    instrutores.splice(instrutores.indexOf(instrutor), 1);

    return resp.status(204).send();

}



module.exports = {
    listarInstrutores,
    obterInstrutor,
    cadastrarInstrutor,
    editarInstrutor,
    atualizarStatus,
    exluirInstrutor
}