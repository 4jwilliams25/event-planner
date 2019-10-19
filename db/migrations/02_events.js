exports.up = function(knex) {
  return knex.schema.createTable("events", table => {
    table.increments();
    table.string("title").notNullable;
    table.string("date").notNullable;
    table.string("time").notNullable;
    table
      .integer("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    table.boolean("completed").notNullable;
    table
      .integer("creator_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE").notNullable;
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("events");
};
