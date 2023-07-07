const db = require("../../config/database");

const findAll = () => {
    return db.tracks.findMany({ include: { albums: true } });
}
const findOne = (filter = {}) => {
    return db.tracks.findUnique({ where: filter, include: { albums: true } });
}
// filter params should be a object with the col we use for filter exemple : {id: 1}
const insertOne = (data) => {
    return db.tracks.create({ data });
}
const updateOne = (album, filter = {}) => {
    return db.tracks.update({ where: filter, data: album });
}
const deleteOne = (id) => {
    return db.tracks.delete({ where: { id } });
}

module.exports = { findAll, findOne, insertOne, updateOne, deleteOne }