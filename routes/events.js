const express = require("express");
const router = express.Router();
const eventsController = require("../controllers/events");

router.get("/events", eventsController.getAllEvents);
router.get("/events/:id", eventsController.getOneEvent);
router.get("/users/:id/events", eventsController.getOneUsersEvents);
router.post("/events", eventsController.addEvent);
router.patch("/events/:id", eventsController.updateEvent);
router.delete("/events/:id", eventsController.removeEvent);

module.exports = router;
