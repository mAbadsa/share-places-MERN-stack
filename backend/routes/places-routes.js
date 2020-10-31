const express = require("express");
const router = express.Router();
const HttpError = require("../models/http-error");

const { getPlacesById, getPlaceByUserId, createPlace, updatePlaceById, deletePlace } = require('../controllers/places-controllers');

router.route("/:pid").get(getPlacesById).patch(updatePlaceById).delete(deletePlace);

router.route("/user/:uid").get(getPlaceByUserId);

router.route("/").post(createPlace);

module.exports = router;
