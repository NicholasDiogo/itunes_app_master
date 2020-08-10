var express = require('express');
const fetch = require("isomorphic-fetch");
var router = express.Router();

// Fetch data from iTunes
router.get("/:term/:entity", (req, res) => {
  let searchTerm = req.params.term;
  let entityTerm = req.params.entity;

  const api_url = `https://itunes.apple.com/search?term=${searchTerm}&entity=${entityTerm}&limit=10`;

  fetch(api_url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      res.send(data.results);
    });
});

module.exports = router;

