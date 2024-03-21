const mongoose = require('mongoose');
const Schema = mongoose.Schema;

function oneYearFromToday(){
  const date = new Date()
  const year = date.getFullYear()
  date.setFullYear(year+1)
  return date
}


const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['Qantas', 'Virgin', 'Bonza'],
    required: true
  },
  airport: {
    type: String,
    enum: ['MEL', 'SYD', 'BNE', 'PER', 'ADL'],
    default: 'MEL',
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999,
  },

  departs: {
    type: Date,
    default: oneYearFromToday
  },

  destinations: [{
    type: Schema.Types.ObjectId,
    ref: "Destination"
  }]
})



module.exports = mongoose.model("Flight", flightSchema)