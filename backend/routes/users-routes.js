const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const { getUsers, signup, login } = require("../controllers/users-controllers");

router.route("/").get(getUsers);

router
  .route("/signup")
  .post(
    [
      check("name").isLength({ min: 5 }),
      check("email").normalizeEmail().isEmail(),
      check("password").isLength({ min: 8 }).isAlphanumeric(),
    ],
    signup
  );

router.route("/login").post(login);

module.exports = router;
