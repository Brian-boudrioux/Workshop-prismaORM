

const getAll = async (req, res, next) => {
    try {
        
        res.status(200).json()
    } catch (error) {
        next(error);
    }
};

const getOne = async (req, res, next) => {
    try {
        
        res.status(200).json();
    } catch (error) {
        next(error);
    }
};

const getTracksByAlbumId = async (req, res, next) => {
    try {

        res.status(200).json()
    } catch (error) {
        next(error);
    }
};

const postAlbums = async (req, res, next) => {
    try {

        res.status(201).json();
    } catch (error) {
        next(error);
    }
};

const updateAlbums = async (req, res, next) => {
    try {

        res.sendStatus(204)
    } catch (error) {
        next(error);
    }
};

const deleteAlbums = async (req, res, next) => {
    try {

        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAll,
    getOne,
    getTracksByAlbumId,
    postAlbums,
    updateAlbums,
    deleteAlbums,
};