create table usuarios (
   id serial primary key,
    nome text not null, 
    email text unique not null,
    senha text not null
);



create table sabores (
    id serial primary key, 
    nome text not null, 
    descricao text, 
    preco integer not null, 
    imagem_url text, 
    quant_estoque integer default 0, 
    disponivel boolean default true
);

create table pedidos(
    id serial primary key, 
    cep text not null, 
    valor_total integer not null, 
    data_pedido timestamp default now(), 
    mensagem_whatsapp text
); 
 
create table itens_pedido(
     id serial primary key, 
     pedido_id integer not null references pedidos(id),
     sabor_id integer not null references sabores(id), 
     quantidade integer not null , 
     preco_unitario integer not null 
);

ALTER TABLE pedidos
ADD COLUMN rua TEXT,
ADD COLUMN numero TEXT,
ADD COLUMN complemento TEXT;


