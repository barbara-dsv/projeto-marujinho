require('dotenv').config();
const express = require('express');
const cors = require('cors');
const rotas = require('./rotas');

const app = express();
app.use(cors());
app.use(express.json());
app.use(rotas);

app.listen(3000, '0.0.0.0', () => {
    console.log('API Marujinho rodando na porta 3000 🌊🍦');
});
