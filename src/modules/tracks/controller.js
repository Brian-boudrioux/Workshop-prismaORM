const { findAll, findOne, insertOne, updateOne, deleteOne } = require("./model");

const getAll = async (req, res, next) => {
    try {
        const albums = await findAll();
        res.status(200).json(albums)
    } catch (error) {
        next(error);
    }
};

const getOne = async (req, res, next) => {
    try {
        const id = Number.parseInt(req.params.id)
        const album = await findOne({ id });
        res.status(200).json(album);
    } catch (error) {
        next(error);
    }
};

const postTrack = async (req, res, next) => {
    try {
        const album = await insertOne(req.body);
        res.status(201).json(album);
    } catch (error) {
        next(error);
    }
};

const updateTrack = async (req, res, next) => {
    try {
        const id = Number.parseInt(req.params.id);
        await updateOne(req.body, { id });
        res.sendStatus(204)
    } catch (error) {
        next(error);
    }
};

const deleteTrack = async (req, res, next) => {
    try {
        const id = Number.parseInt(req.params.id);
        await deleteOne(id);
        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAll,
    getOne,
    postTrack,
    updateTrack,
    deleteTrack
};