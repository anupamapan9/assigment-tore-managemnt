const express = require("express");
const app = express();
const cors = require("cors");

//middlewares
app.use(express.json());
app.use(cors());


//routes
const tourRoute = require('./routes/tour.route')


app.get("/", (req, res) => {
  res.send("Welcome to My tour management");
});

// posting to database

app.use('/api/v1', tourRoute)

module.exports = app;




