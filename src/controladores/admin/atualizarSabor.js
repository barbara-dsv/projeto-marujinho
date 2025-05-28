const knex = require("../../bancoDeDados/config");

const atualizarSabor = async (req, res) => {
	const { id: idSabor } = req.params;
	const { nome, descricao, preco, imagem_url, quant_estoque, disponivel } =
		req.body;
	try {
		const saborEncontrado = await knex("sabores")
			.where({ id: idSabor })
			.first();
		if (!saborEncontrado) {
			return res.status(400).json({ mensagem: "Sabor não encontrado" });
		}
		let novoDisponivel = disponivel;
		if (
			typeof disponivel === "undefined" &&
			typeof quant_estoque !== "undefined"
		) {
			novoDisponivel = quant_estoque > 0;
		}

		await knex("sabores")
			.where({ id: idSabor })
			.update({
				nome,
				descricao,
				preco,
				imagem_url,
				quant_estoque,
				disponivel: novoDisponivel,
			})
			.returning("*");
		return res.status(200).json({ mensagem: "Sabor atualizado com sucesso." });
	} catch (error) {
		return res.status(500).json({ mensagem: "Erro do servidor" });
	}
};

module.exports = atualizarSabor;
