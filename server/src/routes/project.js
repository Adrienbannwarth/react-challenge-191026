const express = require("express");
const router = express.Router();
const checkToken = require("../middleware/token");

router.get("/", checkToken.verifyToken, checkToken.checkAuth, async (req, res, next) => {
    res.status(200).send("En cours");
});

router.post("/add", checkToken.verifyToken, checkToken.checkAuth, async (req, res, next) => {
    res.status(200).send("En cours");
});

router.delete("/delete/:idGroup", checkToken.verifyToken, checkToken.checkAuth, async (req, res, next) => {
    res.status(200).send("En cours");
});


module.exports = router;