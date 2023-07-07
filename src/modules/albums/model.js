const db = require("../../config/database");

const findAll = () => {
    return db.albums.findMany({include: {tracks: true}});
}
const findOne = (filter = {}) => { 
    return db.albums.findUnique({where: filter, include: {tracks: true}});
}
// filter params should be a object with the col we use for filter exemple : {id: 1}
const insertOne = (data) => { 
    return db.albums.create({data});
}
const updateOne = (album, filter = {}) => {
    return db.albums.update({ where: filter, data: album });
}
const deleteOne = (id) => { 
    return db.albums.delete({where: {id}});
}

module.exports = { findAll, findOne, insertOne, updateOne, deleteOne }