/**
 * Created by mlingolu on 4/27/17.
 */


const express = require('express');
const router = express.Router();

let CardsController = require('./../controllers/card');


router.get('/cards',CardsController.getCards);

module.exports = router;