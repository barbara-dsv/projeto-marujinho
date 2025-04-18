const knex = require('../../bancoDeDados/config');

const criarPedido = async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro do servidor' })
    }
};

module.exports = criarPedido; 