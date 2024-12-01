import db from "./db.js";

async function newPostIt(title, text, subtitle, link, linkText) {
    await db.model.PostIt.create({
        title: title,
        text: text,
        subtitle: subtitle,
        link: link,
        linkText: linkText,
    });
}

async function findPostIt(id) {
    db.model.PostIt.findByPk(id).then((data) => {
        return JSON.stringify(data);
    });
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
    db.model.PostIt.findByPk(id).then(async (data) => {
        await data.destroy();
    });
}

async function getPostIts() {
    const data = await db.model.PostIt.findAll();
    return data.map((postIt) => {
        return JSON.stringify(postIt);
    });
}

export default {
    newPostIt: newPostIt,
    findPostIt: findPostIt,
    updatePostIt: updatePostIt,
    deletePostIt: deletePostIt,
    getPostIts: getPostIts,
};
