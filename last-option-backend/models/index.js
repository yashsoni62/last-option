import { Sequelize } from "sequelize";

const DB_HOST = "localhost";
const DB_NAME = "lastoption";
const DB_USER = "root";
const DB_PASSWORD = "root";

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql'
});


try {
    sequelize.authenticate();
    console.log("Database Connected Successfully!");
} catch (error) {
    console.log("Error occured while connecting to the database.", error);
}

export default sequelize;