const knex = require("../../bancoDeDados/config");

const criarPedido = async (req, res) => {
	const { cep, rua, numero, complemento, itens, mensagem_whatsapp } = req.body;

	try {
		let valorTotal = 0;
		let pedidosCriado = [];
		for (item of itens) {
			const sabor = await knex("sabores").where({ id: item.sabor_id }).first();
			console.log(sabor);
			if (!sabor) {
				return res
					.status(404)
					.json({ mensagem: `Sabor com ID ${item.sabor_id} não encontrado.` });
			}

			if (!sabor.disponivel || sabor.quant_estoque === 0) {
				return res
					.status(403)
					.json({
						mensagem: `O sabor "${sabor.nome}" está indisponível no momento.`,
					});
			}

			if (item.quantidade > sabor.quant_estoque) {
				return res.status(400).json({
					mensagem: `Quantidade solicitada para "${sabor.nome}" é maior que o disponível. Disponível: ${sabor.quant_estoque}, solicitado: ${item.quantidade}.`,
				});
			}

			item.preco_unitario = sabor.preco;
			valorTotal += sabor.preco * item.quantidade;
			pedidosCriado.push(item);
		}

		const [pedidoCriado] = await knex("pedidos")
			.insert({
				cep,
				valor_total: valorTotal,
				mensagem_whatsapp,
				rua,
				numero,
				complemento,
				status: "Pendente",
			})
			.returning("*");

		const pedidoId = pedidoCriado.id;

		for (item of pedidosCriado) {
			await knex("itens_pedido").insert({
				pedido_id: pedidoId,
				sabor_id: item.sabor_id,
				quantidade: item.quantidade,
				preco_unitario: item.preco_unitario,
			});

			const sabor = await knex("sabores").where({ id: item.sabor_id }).first();
			const novaQuantidadeEmEstoque = sabor.quant_estoque - item.quantidade;

			await knex("sabores")
				.where({ id: item.sabor_id })
				.update({
					quant_estoque: novaQuantidadeEmEstoque,
					disponivel: novaQuantidadeEmEstoque <= 0 ? false : true,
				});
		}

		return res.status(201).json(pedidoCriado);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ mensagem: "Erro do servidor" });
	}
};

module.exports = criarPedido;
