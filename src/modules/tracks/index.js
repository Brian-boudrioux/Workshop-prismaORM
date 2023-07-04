const router = require('express').Router();
const trackSchema = require("./validator");
const validate = require("../../middlewares/validator");
const {getAll, getOne, postTracks, updateTracks, deleteTracks} = require('./controller');

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', validate(trackSchema), postTracks);
router.put('/:id', updateTracks);
router.delete('/:id', deleteTracks);

module.exports = router;