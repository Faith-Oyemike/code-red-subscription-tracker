//Go and find the Express package that I installed with npm and give it to me.
const express = require("express"); //Store whatever Express returns inside a variable called express

//import subscription route from the route folder
const subscriptionRoute = require("./route/subscriptionRoutes");
const app = express(); //create an express application and store in the variable called "app"

const PORT = 3000; //The Port number the server will use to listen for incoming requests (its like a door number)

// When someone visits the homepage ("/"),
//Listen for a GET request on the route or endpoint ("/").
// send this response back
app.get("/", (req, res) => {
  res.send("Welcome to Code Red Subscription Tracker!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
