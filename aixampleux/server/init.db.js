import db from "./db.js";

async function initDB() {
    await db.db.sync({ force: true });

    var data = await db.model.PostIt.create({
        title: "un nombre premier",
        content: "7",
    });

    data = await db.model.PostIt.create({
        title: "un autre nombre premier",
    });
}

initDB().then(() => {
    console.log("Base de donnée créée et synchronisée.");
});
