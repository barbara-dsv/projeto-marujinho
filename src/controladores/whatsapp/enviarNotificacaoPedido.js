const knex = require('../../bancoDeDados/config');
const enviarMensagem = require('../../utils/enviarMensagem')
require('dotenv').config();


const enviarNotificacaoPedido = async (pedidoId) => {
    try {
        const pedido = await knex('pedidos').where({ id: pedidoId }).first();
        if (!pedido) {
            return res.status(404).json({ mensagem: 'Pedido não encontrado' });
        }
        const valorTotal = pedido.valor_total;

        const itensPedido = await knex('itens_pedido').where({ pedido_id: pedidoId });

        let descricaoItens = '';
        for (const item of itensPedido) {
            const sabor = await knex('sabores').where({ id: item.sabor_id }).first();
            descricaoItens += `\n ${item.quantidade}x - ${sabor.nome}`;
        }

        const mensagem = `
        Olá, Thiago! Um pedido foi feito no site. Segue a descrição:
        Endereço de entrega: Rua:  ${pedido.rua}, nº ${pedido.numero}
        Itens do pedido: ${descricaoItens}
        Valor total do pedido: R$ ${(valorTotal / 100).toFixed(2)}
        `

        await enviarMensagem(process.env.NUMERO_WHATSAPP_THIAGO, mensagem)


    } catch (error) {

    }
}

module.exports = enviarNotificacaoPedido;