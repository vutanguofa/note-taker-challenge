const router = require('express').Router();
const animalRoutes = require('../apiRoutes/notes');

router.use(animalRoutes);

module.exports = router;