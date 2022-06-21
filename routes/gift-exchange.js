const express = require("express");
const router = express.Router();

router.route("/pairs").post((req, res) => {
    res.sendStatus(200);
    const object = req.body.names;
});

router.route("/traditional").post((req, res) => {
    res.sendStatus(200);
    const object = req.body.names;
});

module.exports = router;