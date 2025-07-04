const joi = require('joi');

const schemaLogin = joi.object({
  email: joi.string().email().required().messages({
    'any.required': 'O campo email é obrigatório',
    'string.empty': 'O campo email é obrigatório',
    'string.email': 'O campo email precisa ter um formato válido',
  }),

  senha: joi.string().min(5).required().messages({
    'any.required': 'O campo senha é obrigatório',
    'string.empty': 'O campo senha é obrigatório',
    'string.min': 'A senha precisa conter no mínimo 5 caracteres',
  }),
});

module.exports = schemaLogin;
