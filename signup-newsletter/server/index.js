import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));

app.get("/", (req, res) => {
  res.send("Server is up and running!");
});

const API_KEY = process.env.API_KEY;
const LIST_ID = process.env.LIST_ID;
// Configure headers
let axiosConfig = {
  headers: {
    authorization:
      "Basic " + Buffer.from("randomstring:" + API_KEY).toString("base64"),
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

app.post("/", async (req, res) => {
  const email = req.body.email;
  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
      },
    ],
  };

  // send a POST request to mailchimp API
  try {
    const response = await axios.post(
      `https://us13.api.mailchimp.com/3.0/lists/${LIST_ID}`,
      data,
      axiosConfig
    );
    // console.log(response);
    res.send(response.data);
  } catch (e) {
    console.log(e.message);
  }
});

app.listen(port, () => console.log(`Server is up and running on Port ${port}`));

// API KEY
// e8579a3d4b20b8a0a2854ca9307022d5-us13
// list id
// bf5ed0e2e7
