const joi = require("joi");

const schemaPedido = joi.object({
	cep: joi
		.string()
		.pattern(/^\d{5}-\d{3}$/)
		.required()
		.messages({
			"string.pattern.base": "O campo cep precisa estar no formato 00000-000",
			"any.required": "O campo cep é obrigatório",
			"string.empty": "O campo cep é obrigatório",
		}),
	rua: joi
		.string()
		.pattern(/.*\S.*/)
		.required()
		.messages({
			"string.pattern.base":
				"O campo rua quando preenchido não pode ser encaminhado vazio.",
			"any.required": "O campo rua é obrigatório",
			"string.empty": "O campo rua é obrigatório",
		}),
	numero: joi
		.alternatives()
		.try(joi.string().pattern(/.*\S.*/), joi.number())
		.required()
		.messages({
			"any.required": "O campo número é obrigatório",
			"string.empty": "O campo número é obrigatório",
		}),
	complemento: joi.string().allow("", null),
	mensagem_whatsapp: joi.string().allow("", null),
	itens: joi
		.array()
		.items(
			joi.object({
				sabor_id: joi.number().integer().positive().required().messages({
					"number.base": "O sabor_id deve ser um número",
					"any.required": "O campo sabor_id é obrigatório",
					"number.positive": "O campo sabor_id deve ser um número positivo",
				}),
				quantidade: joi.number().integer().positive().required().messages({
					"number.base": "O campo quantidade deve ser um número",
					"any.required": "O campo quantidade é obrigatório",
					"number.positive": "O campo quantidade deve ser um número positivo",
				}),
			}),
		)
		.min(1)
		.required()
		.messages({
			"array.base": "O campo itens precisa ser uma lista",
			"array.min": "O pedido deve ter pelo menos um item",
			"any.required": "O campo itens é obrigatório",
		}),
	numero_whatsapp: joi
		.string()
		.pattern(/^\d{10,11}$/)
		.allow("", null)
		.messages({
			"string.pattern.base": "O número do WhatsApp deve conter entre 10 e 11 dígitos, incluindo o DDD. Ex: 85912345678",
		}),
	nome_cliente: joi.string().pattern(/.*\S.*/).required().messages({
		'string.pattern.base': 'O campo nome quando preenchido não pode ser encaminhado vazio.',
		'any.required': 'O campo nome é obrigatório',
		'any.empty': 'O campo nome é obrigatório'
	}),
});

module.exports = schemaPedido;
