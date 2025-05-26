const joi = require('joi');

const schemaAtualizarSabor = joi.object({
    nome: joi.string().pattern(/.*\S.*/).messages({
        'string.pattern.base': 'O campo nome quando preenchido não pode ser encaminhado vazio.',
    }),
    descricao: joi.string().pattern(/.*\S.*/).messages({
        'string.pattern.base': 'O campo descricao quando preenchido não pode ser encaminhado vazio.',
        'string.base': 'O campo descrição deve ser um texto.'
    }),
    preco: joi.number().integer().positive().messages({
        'number.base': 'O campo preço deve ser um número',
        'number.positive': 'O campo preço deve ser um número positivo'
    }),
    imagem_url: joi.string().pattern(/.*\S.*/).messages({
        'string.pattern.base': 'O campo url da imagem quando preenchido não pode ser encaminhado vazio.',
        'string.base': 'O campo url da imagem deve ser um texto.'
    }),
    quant_estoque: joi.number().integer().messages({
        'number.base': 'O campo quantidade em estoque deve ser um número',
    })
})

module.exports = schemaAtualizarSabor;
