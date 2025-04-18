const express = require('express');
const cadastrarAdmin = require('./controladores/admin/cadastrarAdmin');
const login = require('./controladores/admin/login')
const listarSabores = require('./controladores/sabores/listarSabores');
const criarPedido = require('./controladores/pedidos/criarPedido');
const enviarNotificacaoPedido = require('./controladores/whatsapp/enviarNotificacaoPedido');
const rotas = express();


rotas.get('/', (req, res) => {
    res.send('API Marujinho funcionando! 🌊🍦')
});

rotas.post('/usuario', cadastrarAdmin);
rotas.post('/login', login);
rotas.get('/sabores', listarSabores);
rotas.post('/pedido', criarPedido)
rotas.post('/enviar-notificacao-pedido', enviarNotificacaoPedido)
module.exports = rotas;
