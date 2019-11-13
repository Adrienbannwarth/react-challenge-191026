const mysqk = require("../helpers/connection");


const promo = [
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024"
];

let addPromo = `
    INSERT INTO
        promo
    SET
        year = ?;
`;

const createPromo = async () => {
    try {
        const connection = await mysqk.connection();
        const insertPromoData = promo.map(async (item) => await connection.query(addPromo, [item]));
        await Promise.all(insertPromoData);
        console.log("ok");
    } catch (e) {
        throw e;
    }
};

createPromo();