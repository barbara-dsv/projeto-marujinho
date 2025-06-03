const knex = require('../../bancoDeDados/config');

const cadastrarSabor = async (req, res) => {
  const { nome, descricao, preco, imagem_url, quant_estoque } = req.body;

  try {
    const saborExiste = await knex('sabores').where({ nome }).first();
    if (saborExiste) {
      return res.status(400).json({
        mensagem: 'Sabor já cadastrado.',
      });
    }

    const novoSabor = await knex('sabores')
      .insert({
        nome,
        descricao,
        preco,
        imagem_url,
        quant_estoque,
        disponivel: true,
      })
      .returning('*');

    return res.status(201).json(novoSabor);
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro do servidor' });
  }
};

module.exports = cadastrarSabor;
