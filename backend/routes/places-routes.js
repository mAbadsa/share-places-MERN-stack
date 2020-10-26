const express = require("express");
const router = express.Router();
const HttpError = require("../models/http-error");

const { getPlacesById, getPlaceByUserId, createPlace } = require('../controllers/places-controllers');

router.route("/").get((req, res, next) => {
  res.json({
    messgae: "Hello",
  });
});

router.route("/:pid").get(getPlacesById);

router.route("/user/:uid").get(getPlaceByUserId);

router.route("/").post(createPlace);

module.exports = router;
