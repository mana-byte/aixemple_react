import db from "./db.js";

async function newPostIt(title, text, subtitle, link, linkText) {
	await db.model.PostIt.create({
		title: title,
		text: text,
		subtitle: subtitle,
		link: link,
		linkText: linkText,
	});
	return {
		message: "PostIt created",
		status: 200,
		title: title,
		text: text,
		subtitle: subtitle,
		link: link,
		linkText: linkText,
	};
}

async function findPostIt(id) {
	console.log(id);
	const data = await db.model.PostIt.findByPk(id);
    return data.toJSON();
}

async function updatePostIt(id, title, text, subtitle, link, linkText) {
	db.model.PostIt.findByPk(id).then(async (data) => {
		(data.title = title),
			(data.text = text),
			(data.subtitle = subtitle),
			(data.link = link),
			(data.linkText = linkText);
		await data.save();
	});
}

async function deletePostIt(id) {
    console.log(id);
	const data = await db.model.PostIt.findByPk(id) 
    await data.destroy();
    return {
        message: "PostIt deleted",
        status: 200,
        id: id,
    };
}

async function getPostIts() {
	const data = await db.model.PostIt.findAll();
	return data.map((postIt) => {
		return postIt.toJSON();
	});
}

export default {
	newPostIt: newPostIt,
	findPostIt: findPostIt,
	updatePostIt: updatePostIt,
	deletePostIt: deletePostIt,
	getPostIts: getPostIts,
};
