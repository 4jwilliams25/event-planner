const knex = require("../db/knex");

exports.getAllEvents = (req, res) => {
  knex("events").then(events => res.json(events));
};

exports.getOneEvent = (req, res) => {
  knex("events")
    .where("id", req.params.id)
    .then(event => res.json(event));
};

exports.getOneUsersEvents = (req, res) => {
  knex("events_users")
    .join("events", "events_users.userId", "=", "events.user_id")
    .where("userId", req.params.id)
    .select(
      "user_id",
      "event_id",
      "title",
      "accepted",
      "date",
      "time",
      "completed",
      "creator_id",
      "created_at",
      "updated_at"
    )
    .then(events => res.json(events));
};

// select * from events_users inner join users on events_users.user_id = users.id

exports.addEvent = (req, res) => {
  knex("events")
    .insert(req.body)
    .returning("*")
    .then(newEvent => res.json(newEvent));
};

exports.updateEvent = (req, res) => {
  knex("events")
    .update({
      ...req.body,
      updated_at: new Date()
    })
    .where("id", req.params.id)
    .returning("*")
    .then(updatedEvent => res.json(updatedEvent));
};

exports.removeEvent = (req, res) => {
  knex("events")
    .del()
    .where("id", req.params.id)
    .returning("*")
    .then(removedEvent => res.json(removedEvent));
};
