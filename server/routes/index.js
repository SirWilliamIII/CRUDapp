const express = require('express');
const router = express.Router();
const queries = require('../db/queries')

/* GET home page. */
router.get('/', (req, res, next) => {
				queries.getAll().



});



module.exports = router;
