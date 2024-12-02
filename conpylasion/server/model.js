import { Sequelize } from "sequelize";
import DataTypes from "sequelize";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sequelize = new Sequelize({
    host: "localhost",
    dialect: "sqlite",
    storage: path.join(__dirname, 'database.sqlite'),
    logging: false,
});

const User = sequelize.define("user", {
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	surname: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});

export default {
    sequelize: sequelize,
    model: {
        User: User,
    },
};
