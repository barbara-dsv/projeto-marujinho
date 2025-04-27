const jwt = require('jsonwebtoken');
const knex = require('../bancoDeDados/config');
require('dotenv').config();

const autenticacao = async (req, res, next) => {
    const { authorization } = req.headers
    if (!authorization) return res.status(401).json({ mensagem: 'Não autorizado' })

    const token = authorization.replace('Bearer', '').trim()
    if (!token) return res.status(401).json({ message: "Para acessar este recurso um token de autenticação válido deve ser enviado." })

    try {
        const { id } = jwt.verify(token, process.env.JWT_SECRET)
        console.log(process.env.JWT_SECRET)

        const admin = await knex('usuarios').where({ id }).first();

        if (!admin) return res.status(400).json({ mensagem: 'Admin não cadastrado' });

        const { senha, ...adminEncontrado } = admin
        req.admin = adminEncontrado
        next()

    } catch (error) {
        console.log(process.env.JWT_SECRET)
        console.log(error)
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }


};

module.exports = autenticacao;
