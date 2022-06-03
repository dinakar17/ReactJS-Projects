const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
let data;

app.get("/", (req, res) => {
  res.send(data);
});

const API_KEY = process.env.API_KEY;

app.post("/", (req, res) => {
  let loc = req.body.location;
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&q=${loc}&units=metric`
    )
    .then((response) => {
      data = response.data;
      res.send(data);
    })
    .catch(e => {
      // console.log(e.response.status);
      res.send(e.response.status);
    });
});

app.listen(port, () => {
  console.log("Server is up and running!");
});
