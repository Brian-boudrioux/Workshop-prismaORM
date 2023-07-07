const router = require('express').Router();
const albumSchema = require("./validator");
const validate = require("../../middlewares/validator");
const {getAll, getOne, postAlbums, updateAlbums, deleteAlbums} = require('./controller');

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', validate(albumSchema), postAlbums);
router.put('/:id', updateAlbums);
router.delete('/:id', deleteAlbums);

module.exports = router;