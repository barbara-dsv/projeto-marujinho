const knex = require('../../bancoDeDados/config');

const listarPedido = async (req, res) => {
  const { id } = req.params;
  try {
    const pedido = await knex('pedidos').where({ id }).first();
    if (!pedido) {
      return res.status(400).json({ mensagem: 'Pedido inexistente' });
    }

    return res.status(200).json(pedido);
  } catch (error) {
    return res.status(500).json({ mensagem: 'Error interno do servidor' });
  }
};

module.exports = listarPedido;
