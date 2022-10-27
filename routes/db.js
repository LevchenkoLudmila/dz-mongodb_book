const mongoose = require('mongoose');

//строка коннекта к бд
const uri = 'mongodb://localhost:27017/dzmongobook';
const options = {
   useNewUrlParser: true,
   useUnifiedTopology: true
}
mongoose.connect(uri, options);

const db = mongoose.connection;

module.exports = db;