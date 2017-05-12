/**
 * Created by mlingolu on 4/27/17.
 */


const express = require('express');
const router = express.Router();

let CardsController = require('./../controllers/card');


router.get('/cards',CardsController.getCards);
router.post('/job/create',CardsController.createJob);

module.exports = router;