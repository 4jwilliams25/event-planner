exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          name: "Captain America",
          email: "murica@steverogers.com",
          password: "password"
        },
        {
          name: "Thor",
          email: "pointbreak@thestrongestavenger.com",
          password: "password"
        },
        {
          name: "Hulk",
          email: "thorIsPuny@therealstrongestavenger.com",
          password: "password"
        }
      ]);
    });
};
