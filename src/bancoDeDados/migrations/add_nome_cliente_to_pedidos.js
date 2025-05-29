exports.up = function (knex) {
    return knex.schema.table("pedidos", function (table) {
        table.string("nome_cliente").nullable();
    });
};

exports.down = function (knex) {
    return knex.schema.table("pedidos", function (table) {
        table.dropColumn("nome_cliente");
    });
};