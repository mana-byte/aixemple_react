import { Sequelize, DataTypes } from "sequelize";

import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new Sequelize({
    dialect: "sqlite",
    storage: path.join(__dirname, "db.sqlite"),
});

const PostIt = db.define("PostIt", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

export default {
    db: db,
    model: {
        PostIt: PostIt,
    },
};
