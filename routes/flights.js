var express = require('express');
var router = express.Router();
const flightsController = require("../controllers/flights");
/* GET home page. */
router.get('/', flightsController.getAllFlights );
router.post('/', flightsController.create );
router.get('/add', flightsController.newFlight );
router.get('/:id', flightsController.getFlight );
module.exports = router;
