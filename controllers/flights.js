// import models
const Flight = require('../models/flights')

async function getAllFlights(req, res, next) {
    const flights = await Flight.find({})
    res.render('flights/index', { title: 'All Flights', flights });
}

async function getFlight(req, res, next) {
  const id = req.params.id
  const flight = await Flight.findById(id)
  res.render('flights/details', { title: 'Flight Detail', flight });
}

function newFlight(req, res, next) {
  const nextYear = getNextYear()
  res.render('flights/new', { title: 'Add Flight', nextYear });
}



async function create(req, res){
  try {
    const flight = await Flight.create(req.body)
    res.redirect(`/flights/${flight._id}`)
  } catch {
    res.redirect("/flights/add")
  }
}

module.exports = {getAllFlights, getFlight, newFlight, create}

function getNextYear(){
  const today = new Date();
  const currentYear = today.getFullYear()
  today.setFullYear(currentYear + 1)
  const nextYear = today.toISOString().slice(0,10);
  return nextYear
}
