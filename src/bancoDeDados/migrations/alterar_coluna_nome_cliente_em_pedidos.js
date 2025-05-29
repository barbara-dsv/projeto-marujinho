exports.up = function (knex) {
    return knex.schema.alterTable("pedidos", function (table) {
        table.string("nome_cliente").notNullable().alter();
    });
};

exports.down = function (knex) {
    return knex.schema.alterTable("pedidos", function (table) {
        table.string("nome_cliente").nullable().alter();
    });
};
