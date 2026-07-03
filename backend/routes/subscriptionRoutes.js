//import express package
const express = require("express");

//create a router to organise subcription routes
const router = express.Router();

//listen for a get request on the "/subscription" route
router.get("/subscription", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Netflix",
      price: 10.0,
      renewalDate: "2026-07-01",
    },

    {
      id: 2,
      name: "AppleMusic",
      price: 15.0,
      renewalDate: "2026-07-05",
    },
  ]);
});

//export route so server.js can see it
module.exports = router;
