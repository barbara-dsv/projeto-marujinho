const express = require("express");
//controladores
const cadastrarAdmin = require("./controladores/admin/cadastrarAdmin");
const login = require("./controladores/admin/login");
const cadastrarSabor = require("./controladores/admin/cadastrarSabor");
const listarSabores = require("./controladores/sabores/listarSabores");
const criarPedido = require("./controladores/pedidos/criarPedido");
const validarRequisicao = require("./intermediadores/validarRequisicao");
const atualizarSabor = require("./controladores/admin/atualizarSabor");
const listarPedidos = require("./controladores/admin/listarPedidos");
const listarPedido = require("./controladores/admin/listarPedido");
const alterarStatusDoPedido = require("./controladores/admin/alterarStatusdoPedido");

//schemas
const schemaAdmin = require("./schemas/schemaAdmin");
const schemaLogin = require("./schemas/schemaLogin");
const schemaPedido = require("./schemas/schemaPedido");
const schemaSabor = require("./schemas/schemaSabor");
const schemaAtualizarSabor = require("./schemas/schemaAtualizarSabor");

const autenticacao = require("./intermediadores/autenticacao");

const rotas = express();

rotas.get("/", (req, res) => {
	res.send("API Marujinho funcionando! 🌊🍦");
});

rotas.post("/admin/usuario", validarRequisicao(schemaAdmin), cadastrarAdmin);
rotas.post("/admin/login", validarRequisicao(schemaLogin), login);
rotas.get("/sabores", listarSabores);
rotas.post("/pedido", validarRequisicao(schemaPedido), criarPedido);

rotas.use(autenticacao);

rotas.post("/admin/sabores", validarRequisicao(schemaSabor), cadastrarSabor);
rotas.put(
	"/admin/sabor/:id",
	validarRequisicao(schemaAtualizarSabor),
	atualizarSabor,
);

rotas.get("/admin/pedidos", listarPedidos);
rotas.get("/admin/pedido/:id", listarPedido);

rotas.put('/admin/pedido/:id/status', alterarStatusDoPedido)

module.exports = rotas;
