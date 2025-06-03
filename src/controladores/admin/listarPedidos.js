const knex = require('../../bancoDeDados/config');

const listarPedidos = async (req, res) => {
  try {
    const pedidos = await knex('pedidos').returning('*');

    return res.status(200).json(pedidos);
  } catch (error) {
    return res.status(500).json({ mensagem: 'Error interno do servidor' });
  }
};

module.exports = listarPedidos;
