const express = require("express");
const router = express.Router();
const roomController = require("../Controllers/Roomcontroller");

// Home route
router.get("/", roomController.home);

// Create a new room
router.post("/create", roomController.create_room);

// Get all rooms
router.get("/all", roomController.get_rooms);

// Delete a room by ID
router.delete("/delete/:id", roomController.delete_room);

// Update a room by ID
router.put("/update/:id", roomController.update_room);

module.exports = router;
