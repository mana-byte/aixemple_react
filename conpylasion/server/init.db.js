import sequelize from "./model.js";

async function initDB() {
	await sequelize.sequelize.sync({ force: true });

	let data = await sequelize.model.User.create({
		name: "Jean",
		surname: "Dupont",
	});
	data = await sequelize.model.User.create({
		name: "Jean",
		surname: "Michel",
	});
}

initDB().then(() => {
	console.log("Base de donnée créée et synchronisée.");
});
