const router = require('express').Router();
const trackSchema = require("./validator");
const validate = require("../../middlewares/validator");
const {getAll, getOne, postTrack, updateTrack, deleteTrack} = require('./controller');

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', validate(trackSchema), postTrack);
router.put('/:id', updateTrack);
router.delete('/:id', deleteTrack);

module.exports = router;