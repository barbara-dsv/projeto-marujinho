const knex = require('../../bancoDeDados/config');

const alterarStatusDoPedido = async (req, res) => {
  const { nome } = req.params;
  const { status } = req.body;

  try {
    const pedidosPorNome = await knex('pedidos')
      .whereILike('nome_cliente', `%${nome}%`)
      .orderBy('data_pedido', 'desc');

    if (pedidosPorNome.length === 0) {
      return res
        .status(404)
        .json({ mensagem: 'Nenhum pedido encontrado com esse nome.' });
    }

    if (pedidosPorNome[0].status === 'concluído') {
      return res.status(404).json({
        mensagem: 'Não é possível alterar o status de um pedido concluído.',
      });
    }
    const idPedido = pedidosPorNome[0].id;

    await knex('pedidos')
      .where({ id: idPedido })
      .update({ status })
      .returning('*');

    return res.status(200).json({ mensagem: 'Sabor atualizado com sucesso.' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ mensagem: 'Erro do servidor' });
  }
};

module.exports = alterarStatusDoPedido;
