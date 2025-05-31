### Rotas 
📦 Pedidos
POST /pedido
Cliente faz um novo pedido no site.

GET /admin/pedidos
Admin lista todos os pedidos feitos (com status, endereço, valor total, etc.).

GET /admin/pedidos/:id
Admin vê os detalhes de um pedido específico (endereços, itens, etc).

PUT /admin/pedidos/:id/status 
Admin pode alterar o status do pedido (ex: "Pendente" ➔ "Em entrega" ➔ "Concluído").

🍦 Sabores
GET /sabores
Cliente lista os sabores disponíveis.

POST /admin/sabores
Admin cadastra um novo sabor no sistema.

PUT /admin/sabores/:id
Admin atualiza informações de um sabor (nome, preço, estoque, disponibilidade...).


🔒 Admin (Autenticação)
POST /admin/usuario
Cadastro de admin.

POST /admin/login
Login do admin para acessar o painel.


