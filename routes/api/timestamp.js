const express = require("express");

const router = express.Router();

router.get("/api/timestamp/:date_string?", (req, res) => {
  const dateString = req.params.date_string;
  const utcDate = new Date(dateString);
  const unixTimestamp = utcDate.getTime();
  const timestapmInt = parseInt(dateString);
  let timestamp = { unix: null, utc: null };

  if (dateString === undefined) {
    let currentDate = new Date();
    timestamp.unix = currentDate.getTime();
    timestamp.utc = currentDate.toUTCString();
  } else if (timestapmInt.toString() === dateString) {
    timestamp.unix = timestapmInt;
    timestamp.utc = new Date(timestapmInt).toUTCString();
  } else if (!isNaN(utcDate)) {
    timestamp.unix = unixTimestamp;
    timestamp.utc = utcDate.toUTCString();
  } else {
    timestamp = { error: "Invalid Date!" };
  }
  res.json(timestamp);
});

module.exports = router;
