exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("events")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("events").insert([
        {
          title: "Work on America's ass",
          date: "10/16/2019",
          time: "0430 hours",
          user_id: 1
        },
        {
          title:
            "Leave hammer lying around and watch people try to pick it up.",
          date: "10/17/2019",
          time: "forthwith",
          user_id: 2
        },
        {
          title: "Smash",
          date: "now",
          time: "All the times!",
          user_id: 3
        }
      ]);
    });
};
