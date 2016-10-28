const mongoose = require( 'mongoose' );

// Backend validations should be the last point of validation just to be absolutely safe!
const Sighting = new mongoose.Schema( {
  name: { type: String, lowercase: true } ,
  order: { type: String, lowercase: true, maxlength: 20 }  ,
  status: { type: String,
    lowercase: true,
    enum: [
      'extinct',
      'endangered',
      'vulnerable',
      'overpopulated'
    ]
  },
  confirmed: { type: Boolean, default: false } ,
  numberSeen: { type: Number, min: 1 }
});

module.exports = mongoose.model( "Sighting", Sighting );
