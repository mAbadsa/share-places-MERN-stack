const express = require("express");
const { check } = require("express-validator");
const router = express.Router();

const {
  getPlaceById,
  getPlacesByUserId,
  createPlace,
  updatePlaceById,
  deletePlace,
} = require("../controllers/places-controllers");

router
  .route("/:pid")
  .get(getPlaceById)
  .patch(
    [
      check("title").not().isEmpty(),
      check("description").isLength({ min: 5 }),
      check("address").not().isEmpty(),
    ],
    updatePlaceById
  )
  .delete(deletePlace);

router.route("/user/:uid").get(getPlacesByUserId);

router
  .route("/")
  .post(
    [
      check("title").not().isEmpty(),
      check("description").isLength({ min: 5 }),
      check("address").not().isEmpty(),
    ],
    createPlace
  );

module.exports = router;
