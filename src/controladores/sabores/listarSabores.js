const knex = require("../../bancoDeDados/config");

const listarSabores = async (req, res) => {
	try {
		const sabores = await knex("sabores")
			.where({ disponivel: true })
			.orderBy("nome");

		return res.status(200).json(sabores);
	} catch (error) {
		return res.status(500).json({ mensagem: "Error interno do servidor" });
	}
};

module.exports = listarSabores;
