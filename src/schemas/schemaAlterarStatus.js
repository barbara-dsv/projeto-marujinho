const Joi = require('joi');

const schemaStatus = Joi.object({
  status: Joi.string()
    .valid('pendente', 'em entrega', 'concluído')
    .required()
    .messages({
      'any.only':
        'Status inválido. Deve ser "pendente", "em entrega" ou "concluído".',
      'any.required': 'O status é obrigatório.',
    }),
});

module.exports = schemaStatus;
