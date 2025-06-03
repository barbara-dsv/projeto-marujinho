exports.up = function (knex) {
  return knex.schema.table('pedidos', function (table) {
    table.string('status').defaultTo('Pendente');
  });
};

exports.down = function (knex) {
  return knex.schema.table('pedidos', function (table) {
    table.dropColumn('status');
  });
};
