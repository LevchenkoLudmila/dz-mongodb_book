const mongoose = require('mongoose');
const { Schema } = mongoose;

const generalSchema = new Schema({
   janr: { 
      type: Schema.Types.String,
      minLength: 2,
   }
});

const model = mongoose.model('ganre', generalSchema);
module.exports = model;