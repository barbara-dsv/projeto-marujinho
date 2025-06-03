const joi = require('joi');

const schemaSabor = joi.object({
  nome: joi
    .string()
    .pattern(/.*\S.*/)
    .required()
    .messages({
      'string.pattern.base':
        'O campo nome quando preenchido não pode ser encaminhado vazio.',
      'any.required': 'O campo nome é obrigatório',
      'any.empty': 'O campo nome é obrigatório',
      'string.empty': 'O campo nome é obrigatório',
    }),
  descricao: joi
    .string()
    .pattern(/.*\S.*/)
    .messages({
      'string.pattern.base':
        'O campo descricao quando preenchido não pode ser encaminhado vazio.',
      'string.base': 'O campo descrição deve ser um texto.',
    }),
  preco: joi.number().integer().positive().required().messages({
    'number.base': 'O campo preço deve ser um número',
    'any.required': 'O campo preço é obrigatório',
    'number.positive': 'O campo preço deve ser um número positivo',
  }),
  imagem_url: joi
    .string()
    .pattern(/.*\S.*/)
    .messages({
      'string.pattern.base':
        'O campo url da imagem quando preenchido não pode ser encaminhado vazio.',
      'string.base': 'O campo url da imagem deve ser um texto.',
    }),
  quant_estoque: joi.number().integer().positive().required().messages({
    'number.base': 'O campo quantidade em estoque deve ser um número',
    'any.required': 'O campo prquantidade em estoqueeço é obrigatório',
    'number.positive':
      'O campo quantidade em estoque deve ser um número positivo',
  }),
});

module.exports = schemaSabor;
