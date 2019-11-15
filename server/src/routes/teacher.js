const express = require("express");
const router = express.Router();
const checkToken = require("../middleware/token");


router.put("/update/mark/:idStudent/:idMark",
    checkToken.verifyToken,
    checkToken.checkAuth,
    checkToken.isTeacher,
    async (req, res, next) => {

    });

router.get("/student/:idStudent",
    checkToken.verifyToken,
    checkToken.checkAuth,
    checkToken.isTeacher,
    async (req, res, next) => {

    });

router.get("/students/:idPromo/:idFaculty",
    checkToken.verifyToken,
    checkToken.checkAuth,
    checkToken.isTeacher,
    async (req, res, next) => {

    });


module.exports = router;