const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const { PORT, MONGODB_URI } = require("./utils/config");
const { MongoClient } = require("mongodb");

const client = new MongoClient(MONGODB_URI);

app.use(cors());
app.use(express.json());
app.use(express.static("build"));

app.get("/api", (request, response) => {
  async function run() {
    try {
      await client.connect();
      const db = client.db("api");
      const coll = db.collection("database");
      const cursor = coll.find();
      await cursor.forEach((data) => response.json(data));
    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);
});

app.listen(PORT, () => {
  console.log(`Connected on port ${PORT}`);
});
