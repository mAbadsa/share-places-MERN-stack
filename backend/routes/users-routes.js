const express = require("express");
const router = express.Router();

const { getUsers, signin, login } = require("../controllers/users-controllers");

router.route("/").get(getUsers);

router.route("/signup").post(signin);

router.route("/login").post(login);

module.exports = router;
