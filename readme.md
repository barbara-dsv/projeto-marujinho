# 🧁 Projeto Marujinho - API de Pedidos de Sorvete

API desenvolvida para gerenciar pedidos de sorvetes do Marujinho, lojinha local de "gutinhos" (sorvetes de saquinho). Permite que clientes realizem pedidos e que o administrador gerencie sabores, status e informações dos pedidos.

## 🔧 Tecnologias utilizadas

- Node.js
- Express
- PostgreSQL
- Knex.js
- Joi (validação)
- Bcrypt (criptografia de senhas)
- JWT (autenticação)
- Multer + Cloudinary (upload de imagens)
- Dotenv
- Nodemon (desenvolvimento)

---

## 🚀 Rodando o projeto localmente

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/projeto-marujinho.git
```
2. Instale as dependências
```bash
npm install
```
3. Configure o arquivo .env
Crie um arquivo .env na raiz com as seguintes variáveis:
```bash
PORT=3000
DATABASE_URL=postgres://usuario:senha@localhost:5432/nomedobanco
JWT_SECRET=sua_chave_secreta
CLOUDINARY_CLOUD_NAME=seu_cloud_name
CLOUDINARY_API_KEY=sua_api_key
CLOUDINARY_API_SECRET=sua_api_secret
```
4. Rode as migrations 
```bash
npx knex migrate:latest
```
5. Inicie o servidor
```bash
npm run dev
```

## 📦 Rotas da API

✅ Pública

| Método | Rota             | Descrição                                   |
| ------ | ---------------- | ------------------------------------------- |
| GET    | `/`              | Teste da API ("API Marujinho funcionando!") |
| POST   | `/admin/usuario` | Cadastro de novo administrador              |
| POST   | `/admin/login`   | Login do administrador                      |
| GET    | `/sabores`       | Lista todos os sabores disponíveis          |
| POST   | `/pedido`        | Criação de novo pedido por cliente          |
| POST   | `/upload`        | Upload de imagem (Cloudinary)               |

## 🔐 Rotas protegidas (requer token JWT)
⚠️ Essas rotas requerem autenticação do administrador.

🧁 Sabores
| Método | Rota               | Descrição                 |
| ------ | ------------------ | ------------------------- |
| POST   | `/admin/sabores`   | Cadastro de um novo sabor |
| PUT    | `/admin/sabor/:id` | Atualização de um sabor   |

📦 Pedidos
| Método | Rota                         | Descrição                    |
| ------ | ---------------------------- | ---------------------------- |
| GET    | `/admin/pedidos`             | Lista todos os pedidos       |
| GET    | `/admin/pedido/:id`          | Detalha um pedido específico |
| PUT    | `/admin/pedido/:nome/status` | Atualiza o status do pedido  |

## 🤝 Contribuição
Este projeto foi desenvolvido com fins de estudo, prática e aprendizado.
Sinta-se à vontade para contribuir, sugerir melhorias ou relatar bugs!

Para contribuir:

1. Fork este repositório

2. Crie uma branch com sua feature: git checkout -b minha-feature

3. Commit suas mudanças: git commit -m 'feat: minha nova feature'

4. Push para a sua branch: git push origin minha-feature

5. Abra um Pull Request

# 👩‍💻 Quem fez
Desenvolvido por @barbara-dsv 💙
Desenvolvedora fullstack em formação e entusiasta de tecnologia.
