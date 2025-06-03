const axios = require('axios');

const validarCep = async (cep) => {
  try {
    const resposta = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    const dados = resposta.data;

    if (dados.erro) {
      return { valido: false, mensagem: 'CEP inválido' };
    }

    const bairro = dados.bairro?.toLowerCase();

    if (!bairro.includes('mucuripe')) {
      return {
        valido: false,
        mensagem: 'No momento só fazemos entregas no bairro Mucuripe.',
      };
    }

    return { valido: true };
  } catch (error) {
    return { valido: false, mensagem: 'Erro ao validar o CEP' };
  }
};

module.exports = validarCep;
