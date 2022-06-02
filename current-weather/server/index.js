const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send();
});

const API_KEY = process.env.API_KEY;

app.post("/", (req, res) => {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&q=London&units=metric`
    )
    .then((response) => {
      let data = response.data;
      res.send(data);
    });
});

app.listen(5000, () => {
  console.log("Server is up and running!");
});
