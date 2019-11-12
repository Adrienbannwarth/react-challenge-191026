const express = require("express");
const router = express.Router();

router.get("/" ,  async (req, res, next) => {

});

router.post("/", /* Middle to check intervenant acess,*/ async (req, res, next) => {

});

router.put("/:idProject", /* Middle to check intervenant acess,*/ async (req, res, next) => {

});

router.delete("/idProject", /* Middle to check intervenant acess,*/ async (req, res, next) => {

});

module.exports = router;