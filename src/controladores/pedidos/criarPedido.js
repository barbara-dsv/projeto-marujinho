const knex = require('../../bancoDeDados/config');
const enviarNotificacaoPedido = require('../whatsapp/enviarNotificacaoPedido');

const criarPedido = async (req, res) => {
    const { cep, rua, numero, complemento, itens, mensagem_whatsapp } = req.body;

    try {
        let valorTotal = 0;
        let pedidosCriado = [];
        for (item of itens) {
            const saborDisponivel = await knex('sabores').where({ id: item.sabor_id }).andWhere({ disponivel: true }).first();

            if (!saborDisponivel) {
                return res.status(403).json({ mensagem: "Sabor não disponível" });
            };
            if (item.quantidade > saborDisponivel.quant_estoque) {
                return res.status(400).json({
                    mensagem: `Estoque insuficiente para o sabor ${saborDisponivel.nome}. Disponível: ${saborDisponivel.quant_estoque}, solicitado: ${item.quantidade}`
                });
            }
            item.preco_unitario = saborDisponivel.preco;
            valorTotal += saborDisponivel.preco * item.quantidade
            pedidosCriado.push(item)
        }

        const [pedidoCriado] = await knex('pedidos').insert({
            cep,
            valor_total: valorTotal,
            mensagem_whatsapp,
            rua,
            numero,
            complemento
        }).returning('*')

        const pedidoId = pedidoCriado.id;

        for (item of pedidosCriado) {
            await knex('itens_pedido').insert({
                pedido_id: pedidoId,
                sabor_id: item.sabor_id,
                quantidade: item.quantidade,
                preco_unitario: item.preco_unitario
            });

            const sabor = await knex('sabores').where({ id: item.sabor_id }).first();
            const novaQuantidadeEmEstoque = sabor.quant_estoque - item.quantidade;

            await knex('sabores').where({ id: item.sabor_id }).update({
                quant_estoque: novaQuantidadeEmEstoque,
                disponivel: novaQuantidadeEmEstoque <= 0 ? false : true
            });
        };

        setImmediate(async () => {
            await enviarNotificacaoPedido(pedidoId)
        })

        return res.status(201).json(pedidoCriado);
    } catch (error) {
        console.log(error)
        return res.status(500).json({ mensagem: 'Erro do servidor' })
    }
};

module.exports = criarPedido;

