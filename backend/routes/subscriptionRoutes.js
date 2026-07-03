//import express package
const express = require("express");

// Import the controller so the route can use it to handle subscription requests
const { getSubscriptions } = require("../controllers/subscriptionController");

//create a router to organise subcription routes
const router = express.Router();

//listen for a get request on the "/subscription" route
router.get("/subscription", getSubscriptions);

//export route so server.js can see it
module.exports = router;
