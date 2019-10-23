const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./config");
const PORT = 8000;

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

mongoose.connect(config.getDBPath(), {useNewUrlParser: true})
  .then(() => {
    console.log("Mongoose connected");

    app.use("/", )

    app.listen(PORT, () => {
      console.log(`Server running at ${PORT} port`);
    });
  });
