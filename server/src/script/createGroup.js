const mysql = require("../helpers/connection");

const group = [
    {
        "name": 'WEB 1A',
        promo: 1,
        faculty: 1,
    },
    {
        "name": 'WEB 1B',
        promo: 1,
        faculty: 1,
    },
    {
        "name": 'WEB 2A',
        promo: 1,
        faculty: 1,
    },
    {
        "name": 'WEB 2B',
        promo: 1,
        faculty: 1,
    },
    {
        "name": 'H1A',
        promo: 1,
        faculty: 2,
    },
    {
        "name": 'H1B',
        promo: 1,
        faculty: 2,
    },
    {
        "name": 'H2A',
        promo: 1,
        faculty: 2,
    },
    {
        "name": 'H2B',
        promo: 1,
        faculty: 2,
    },
    {
        "name": '3D 1A',
        promo: 1,
        faculty: 3,
    },
    {
        "name": '3D 1B',
        promo: 1,
        faculty: 3,
    },
    {
        "name": '3D 2B',
        promo: 1,
        faculty: 3,
    },
    {
        "name": '3D 2B',
        promo: 1,
        faculty: 3,
    },

    {
        "name": 'WM 1A',
        promo: 1,
        faculty: 4,
    },
    {
        "name": 'WM 2A',
        promo: 1,
        faculty: 4,
    },
    {
        "name": 'WM 2B',
        promo: 1,
        faculty: 4,
    },


    {
        "name": 'WEB 1A',
        promo: 2,
        faculty: 1,
    },
    {
        "name": 'WEB 1B',
        promo: 2,
        faculty: 1,
    },
    {
        "name": 'WEB 2A',
        promo: 2,
        faculty: 1,
    },
    {
        "name": 'WEB 2B',
        promo: 2,
        faculty: 1,
    },

    {
        "name": 'H1A',
        promo: 2,
        faculty: 2,
    },
    {
        "name": 'H1B',
        promo: 2,
        faculty: 2,
    },
    {
        "name": 'H2A',
        promo: 2,
        faculty: 2,
    },
    {
        "name": 'H2B',
        promo: 2,
        faculty: 2,
    },


    {
        "name": '3D 1A',
        promo: 2,
        faculty: 3,
    },
    {
        "name": '3D 1B',
        promo: 2,
        faculty: 3,
    },
    {
        "name": '3D 2A',
        promo: 2,
        faculty: 3,
    },
    {
        "name": '3D 2B',
        promo: 2,
        faculty: 3,
    },


    {
        "name": 'WM 1A',
        promo: 2,
        faculty: 4,
    },
    {
        "name": 'WM 1B',
        promo: 2,
        faculty: 4,
    },
    {
        "name": 'WM 2A',
        promo: 2,
        faculty: 4,
    },
    {
        "name": 'WM 2B',
        promo: 2,
        faculty: 4,
    },


    {
        "name": 'WEB 1A',
        promo: 3,
        faculty: 1,
    },
    {
        "name": 'WEB 1B',
        promo: 3,
        faculty: 1,
    },
    {
        "name": 'WEB 2A',
        promo: 3,
        faculty: 1,
    },
    {
        "name": 'WEB 2B',
        promo: 3,
        faculty: 1,
    },
    {
        "name": 'H1A',
        promo: 3,
        faculty: 2,
    },
    {
        "name": 'H1B',
        promo: 3,
        faculty: 2,
    },
    {
        "name": 'H2A',
        promo: 3,
        faculty: 2,
    },
    {
        "name": 'H2B',
        promo: 3,
        faculty: 2,
    },
    {
        "name": '3D 1A',
        promo: 3,
        faculty: 3,
    },
    {
        "name": '3D 1B',
        promo: 3,
        faculty: 3,
    },
    {
        "name": '3D 2A',
        promo: 3,
        faculty: 3,
    },
    {
        "name": '3D 2B',
        promo: 3,
        faculty: 3,
    },
    {
        "name": 'WM 1A',
        promo: 3,
        faculty: 4,
    },
    {
        "name": 'WM 1B',
        promo: 3,
        faculty: 4,
    },
    {
        "name": 'WM 2A',
        promo: 3,
        faculty: 4,
    },
    {
        "name": 'WM 2B',
        promo: 3,
        faculty: 4,
    },

    {
        "name": 'WEB 1A',
        promo: 4,
        faculty: 1,
    },
    {
        "name": 'WEB 1B',
        promo: 4,
        faculty: 1,
    },
    {
        "name": 'WEB 2A',
        promo: 4,
        faculty: 1,
    },
    {
        "name": 'WEB 2B',
        promo: 4,
        faculty: 1,
    },
    {
        "name": 'WEB 1A',
        promo: 4,
        faculty: 1,
    },
    {
        "name": 'WEB 1B',
        promo: 4,
        faculty: 1,
    },
    {
        "name": 'WEB 2A',
        promo: 4,
        faculty: 1,
    },
    {
        "name": 'WEB 2B',
        promo: 4,
        faculty: 1,
    },
    {
        "name": 'H1A',
        promo: 4,
        faculty: 2,
    },
    {
        "name": 'H1B',
        promo: 4,
        faculty: 2,
    },
    {
        "name": 'H2A',
        promo: 4,
        faculty: 2,
    },
    {
        "name": 'H2B',
        promo: 4,
        faculty: 2,
    },
    {
        "name": '3D 1A',
        promo: 4,
        faculty: 3,
    },
    {
        "name": '3D 1B',
        promo: 4,
        faculty: 3,
    },
    {
        "name": '3D 2A',
        promo: 4,
        faculty: 3,
    },
    {
        "name": '3D 2B',
        promo: 4,
        faculty: 3,
    },
    {
        "name": 'WM 1A',
        promo: 4,
        faculty: 4,
    },
    {
        "name": 'WM 1B',
        promo: 4,
        faculty: 4,
    },
    {
        "name": 'WM 2A',
        promo: 4,
        faculty: 4,
    },
    {
        "name": 'WM 2B',
        promo: 4,
        faculty: 4,
    },
];

const createGroup = async () => {
    let sql = `
        INSERT INTO
            groupPromo
        SET
            name = ?,
            idPromo = ?,
            idFaculty = ?;
    `;
    try {
        const connection = await mysql.connection();
        await connection.beginTransaction();
        const insertDataGroup = group.map(async (item) => await connection.query(sql, [item.name, item.promo, item.faculty]));
        await Promise.all(insertDataGroup);
        await connection.commit();
        process.exit(0);
    } catch (e) {
        throw e;
    }
};

createGroup();