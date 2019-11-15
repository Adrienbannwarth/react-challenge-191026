const promoModel = require("../model/sql/promo");
const createError = require("http-errors");

module.exports = {
    getPromo: async (req, res, next) => {
        try {
            const promo = await promoModel.getPromo();
            res.status(200).send(promo);
        } catch (e) {
            next(createError(500))
        }
    }
};