const mongoose = require('mongoose');
const { Schema } = mongoose;

const generalSchema = new Schema({
   name: { 
      type: Schema.Types.String,
      minLength: 2,
   },
   ganrId: { 
      type: Schema.Types.ObjectId,
      ref: 'ganre'
   },
   publication: {
      type: Schema.Types.Data,
      minLength: 4,
   },
   comments: {
      type: Schema.Types.Array,
      ref: 'comment',
  }
});

const model = mongoose.model('book', generalSchema);
module.exports = model;