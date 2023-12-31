
const { Sequelize, DataTypes } = require("sequelize");
const db_config = require("../../config/dbconfig")
const sql = require("mysql2/promise")

sql.
    createConnection({ user: db_config.USER, password: db_config.PASSWORD })
    .then(() => {
        console.log("db CONNECTED successfully")
    })

const sequelize = new Sequelize(
    db_config.DATABASE,
    db_config.USER,
    db_config.PASSWORD, {
    host: db_config.HOST,
    dialect: db_config.DIALECT,
}
)

const db = {}
db.sequelize = sequelize

//importing users table
db.signuptable = require("./user")(sequelize, DataTypes)

//importing tours table
db.tourstable = require("./tours")(sequelize, DataTypes)

db.bookingstable = require("./booking")(sequelize, DataTypes)

db.complaintstable = require("./complaint")(sequelize, DataTypes)

db.sequelize.sync({ force: false }, () => {
    console.log("Sync done");
});

console.log('connection successful !!!')


module.exports = db;
