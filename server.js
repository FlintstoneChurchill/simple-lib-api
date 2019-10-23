const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./config");
const books = require("./app/books");
const PORT = process.env.OPENSHIFT_NODEJS_PORT || 8000;
const server_ip_address = process.env.OPENSHIFT_NODEJS_IP || 'localhost';

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

mongodb_connection_string = config.getDBPath();
if(process.env.OPENSHIFT_MONGODB_DB_URL){
  mongodb_connection_string = process.env.OPENSHIFT_MONGODB_DB_URL + db_name;
}

mongoose.connect(mongodb_connection_string, {useNewUrlParser: true})
  .then(() => {
    console.log("Mongoose connected");

    app.use("/", books());

    app.listen(PORT, server_ip_address, () => {
      console.log(`Server running at ${PORT} port`);
    });
  });
