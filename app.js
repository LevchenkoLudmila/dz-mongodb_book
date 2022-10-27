const express = require('express');
const server = express();

const multer  = require('multer');
const storage = multer.memoryStorage();
const uploads = multer({storage});

const db = require('./routes/db');
const BookModel = require('./models/book');
const GanreModel = require('./models/ganre');
//const CommentModel = require('./models/comment');

server.set('view engine', 'ejs');
server.set('views', './views');

server.use(express.static('public'));

server.listen(3000);

server.get('/', (req, res) => {
   res.render('index');
});

server.get('/list', async (req, res) => {
   res.render('list');
});

server.get('/json', async (req, res) => {
   const bookList = await BookModel.find({},).populate('ganre');
   console.log(bookList);
   res.send(JSON.stringify(bookList));
});

server.get('/ganre', async (req, res) => {
   const ganreList = await GanreModel.find({},'ganre').exec();
   res.send(JSON.stringify(ganreList));
});

// server.get('/comment', async (req, res) => {
//    const bookList = await BookModel.find({},'name').exec();
//    res.send(JSON.stringify(bookList));
// });

server.post('/stats', uploads.none(), async function(req, res){
   const ganrId = req.body.select;
   const doc = await BookModel.create({
      name: req.body.bookname,
      ganre: ganrId,
      comment:[],
   });
   console.log(doc);
   console.log(req.body);
   res.send('Записано');

});

server.post('/comment', uploads.none(), async function(req, res){
   const bookId = req.body.select;
   const comment = req.body.comment;
   const doc = await CommentModel.create({content: comment});
   const bookUpdate = await BookModel.updateOne[(
      {_id: bookId},
      {
         $push:{ comments: doc.id}
      })];

   //console.log(bookUpdate);
   console.log(doc);
   console.log(doc.id);
   res.send('Записано');

});

const init = async() => {
   console.log('kk');
   const docGanre = await GanreModel.create({ganre: req.body.ganre});
   const ganrId = docGanre.id;
   const doc = await BookModel.create({
      name: req.body.bookname,
      ganre: ganrId,
      comment:[],
   });
   console.log(doc);
   console.log(docGanre);
}
init();

db.once('open', () => {
   console.log('Connect to db');
});

db.once('close', () => {
   console.log('Close to connect to db');
});