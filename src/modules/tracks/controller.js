

const getOne = async (req, res, next) => {
    try {


        res.status(200).json();
    } catch (error) {
        next(error);
    }
}

const getAll = async (req, res, next) => {
    try {

        res.status(200).json();
    } catch (error) {
        next(error);
    }
};

const postTracks = async (req, res, next) => {
    try {

        res.status(201).json();
    } catch (error) {
        next(error);
    }
};

const updateTracks = async (req, res, next) => {
    try {

        res.sendStatus(204)
    } catch (error) {
        next(error);
    }
};

const deleteTracks = async (req, res, next) => {
    try {
        
        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
};

module.exports = { getOne, getAll, postTracks, updateTracks, deleteTracks };