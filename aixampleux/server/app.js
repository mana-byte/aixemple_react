import db from "./db.js";

async function newPostIt(title, content) {
    await db.model.PostIt.create({
        title: title,
        content: content,
    });
}

async function findPostIt(id) {
    db.model.PostIt.findByPk(id).then((data) => {
        return data.toJSON();
    });
}

async function updatePostIt(id, newTitle, newContent) {
    db.model.PostIt.findByPk(id).then(async (data) => {
        data.title = newTitle;
        data.content = newContent;
        await data.save();
    });
}

async function deletePostIt(id) {
    db.model.PostIt.findByPk(id).then(async (data) => {
        await data.destroy();
    });
}

async function getPostIts() {
    db.model.PostIt.findAll().then((data) => {
        return data.toJSON();
    });
}

export default {
    newPostIt: newPostIt,
    findPostIt: findPostIt,
    updatePostIt: updatePostIt,
    deletePostIt: deletePostIt,
    getPostIts: getPostIts,
};
