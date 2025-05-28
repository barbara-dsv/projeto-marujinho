const knex = require("../../bancoDeDados/config");
const bcrypt = require("bcrypt");

const cadastrarAdmin = async (req, res) => {
	const { nome, email, senha } = req.body;
	try {
		const emailRegistrado = await knex("usuarios").where({ email }).first();
		if (emailRegistrado) {
			return res.status(400).json({
				mensagem: "Email já cadastrado.",
			});
		}

		const senhaCriptografada = await bcrypt.hash(senha, 10);

		const usuario = await knex("usuarios")
			.insert({
				nome,
				email,
				senha: senhaCriptografada,
			})
			.returning("*");

		const { senha: _, ...usuarioCadastrado } = usuario[0];

		return res.status(201).json(usuarioCadastrado);
	} catch (error) {
		return res.status(500).json({ mensagem: "Erro do servidor" });
	}
};

module.exports = cadastrarAdmin;
