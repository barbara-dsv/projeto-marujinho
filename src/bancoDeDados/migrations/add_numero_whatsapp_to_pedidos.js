exports.up = function (knex) {
  return knex.schema.table('pedidos', function (table) {
    table.string('numero_whatsapp', 20).nullable();
  });
};

exports.down = function (knex) {
  return knex.schema.table('pedidos', function (table) {
    table.dropColumn('numero_whatsapp');
  });
};
