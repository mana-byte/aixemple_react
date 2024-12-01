import { Sequelize, DataTypes } from "sequelize";

import { fileURLToPath } from "node:url";
import path from "node:path";

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
    text: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    subtitle: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    link: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    linkText: {
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
