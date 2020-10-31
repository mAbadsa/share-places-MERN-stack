const express = require("express");
const router = express.Router();

const { getPlaceById, getPlacesByUserId, createPlace, updatePlaceById, deletePlace } = require('../controllers/places-controllers');

router.route("/:pid").get(getPlaceById).patch(updatePlaceById).delete(deletePlace);

router.route("/user/:uid").get(getPlacesByUserId);

router.route("/").post(createPlace);

module.exports = router;
