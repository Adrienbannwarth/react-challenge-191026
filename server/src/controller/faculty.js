const facultyModel = require("../model/sql/faculty");
const createError = require("http-errors");

module.exports = {
    getFaculty: async (req, res, next) => {
        try {
            const faculty = await facultyModel.getFaclty();
            res.status(200).send(faculty);
        } catch (e) {
            next(createError(500))
        }
    }
};