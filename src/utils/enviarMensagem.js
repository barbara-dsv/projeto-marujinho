const axios = require('axios');

const enviarMensagem = async (numero, mensagem) => {

    try {
        const resposta = await axios.post(
            `https://api.z-api.io/instances/${process.env.ID_INSTANCIA_ZAPI}/token/${process.env.TOKEN_INSTANCIA_ZAPI}/send-text`,
            {
                phone: String(numero),
                message: String(mensagem),
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Client-Token': process.env.CLIENT_TOKEN_ZAPI,
                },
            }

        );

        console.log("Mensagem enviada com sucesso!", resposta.data);

    } catch (erro) {
        console.error("Erro ao enviar mensagem:", erro.response?.data || erro.message);
    }
};

module.exports = enviarMensagem;