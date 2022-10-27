const mongoose = require('mongoose');
const { Schema } = mongoose;

const generalSchema = new Schema({
   comments: {
      type: Schema.Types.Array,
      minLength: 1,
  }
});

const model = mongoose.model('comment', generalSchema);
module.exports = model;