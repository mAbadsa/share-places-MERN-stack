const express = require("express");
const router = express.Router();

router.route('/').get((req, res, next) => {
    res.json({ messgae: "Hello" })
})

module.exports = router;