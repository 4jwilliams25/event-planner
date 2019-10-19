exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("events_users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("events_users").insert([
        {
          userId: 1,
          accepted: true,
          event_id: 2
        },
        {
          userId: 2,
          accepted: false,
          event_id: 3
        },
        {
          userId: 1,
          accepted: true,
          event_id: 2
        }
      ]);
    });
};
