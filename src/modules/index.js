const router = require("express").Router();
const albumsRouter = require("./albums");
const tracksRouter = require("./tracks");

router.use("/albums", albumsRouter);
router.use("/tracks", tracksRouter);

module.exports = router;