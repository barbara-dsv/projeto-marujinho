
const knex = require("../../bancoDeDados/config");

const alterarStatusDoPedido = async (req, res) => {
    const { id: idPedido } = req.params;

    try {
        //TODO 

    } catch (error) {
        return res.status(500).json({ mensagem: "Erro do servidor" })
    }
};

module.exports = alterarStatusDoPedido