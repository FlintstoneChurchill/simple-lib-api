const express = require("express");
const router = express.Router();

const createRouter = () => {
  router.get("/", (req, res) => {
    res.send("Hello!");
  });
  return router;
};

module.exports = createRouter;
