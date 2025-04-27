const express = require('express');
const cadastrarAdmin = require('./controladores/admin/cadastrarAdmin');
const login = require('./controladores/admin/login')
const listarSabores = require('./controladores/sabores/listarSabores');
const criarPedido = require('./controladores/pedidos/criarPedido');
const validarRequisicao = require('./intermediadores/validarRequisicao')
const schemaAdmin = require('./schemas/schemaAdmin')
const schemaLogin = require('./schemas/schemaLogin');
const schemaPedido = require('./schemas/schemaPedido');
const rotas = express();


rotas.get('/', (req, res) => {
    res.send('API Marujinho funcionando! 🌊🍦')
});

rotas.post('/usuario', validarRequisicao(schemaAdmin), cadastrarAdmin);
rotas.post('/login', validarRequisicao(schemaLogin), login);
rotas.get('/sabores', listarSabores);
rotas.post('/pedido', validarRequisicao(schemaPedido), criarPedido)
module.exports = rotas;
