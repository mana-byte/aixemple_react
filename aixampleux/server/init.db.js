import db from "./db.js";

async function initDB() {
	await db.db.sync({ force: true });

	let data = await db.model.PostIt.create({
		title: "un nombre premier",
		text: "7",
		link: "https://fr.wikipedia.org/wiki/Nombre_premier",
	});
	data = await db.model.PostIt.create({
		title: "un nombre premier",
		text: "7",
		link: "https://fr.wikipedia.org/wiki/Nombre_premier",
        linkText: "Wikipedia",
	});

	data = await db.model.PostIt.create({
		title: "un autre nombre premier",
	});
}

initDB().then(() => {
	console.log("Base de donnée créée et synchronisée.");
});
