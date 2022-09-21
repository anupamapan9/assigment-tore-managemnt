const express = require("express");
const app = express();
const cors = require("cors");

//middlewares
app.use(express.json());
app.use(cors());


//routes
const tourRoute = require('./routes/tour.route')


app.get("/", (req, res) => {
  res.send("Welcome to ACC Tour management");
});
app.get("/api/v1/", (req, res) => {
  res.send("Welcome to ACC Tour management");
});

// posting to database

app.use('/api/v1', tourRoute)

module.exports = app;




