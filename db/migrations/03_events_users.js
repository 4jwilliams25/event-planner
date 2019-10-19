exports.up = function(knex, Promise) {
  return knex.schema.createTable("events_users", table => {
    table.increments();
    table
      .integer("userId")
      .references("id")
      .inTable("users")
      .onDelete("cascade")
      .notNullable();
    table.boolean("accepted").notNullable();
    table
      .integer("event_id")
      .references("id")
      .inTable("events")
      .onDelete("cascade")
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("events_users");
};
