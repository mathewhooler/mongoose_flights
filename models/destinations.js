const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
      type: String,
      enum: ['MEL', 'SYD', 'BNE', 'PER', 'ADL'],
    },
    departs: {
      type: Date,
    },
  })

module.exports = mongoose.model("Destination", destinationSchema)