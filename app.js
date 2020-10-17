require('dotenv').config();
//use path module
const path = require('path');
//use express module
const express = require('express');
//use hbs view engine
const hbs = require('hbs');
//use bodyParser middleware
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT;
const host = process.env.HOST || 'localhost';
const cors = require('cors');

app.use(cors())
app.set('port', port)

//set dynamic views file
app.set('views',path.join(__dirname,'views'));
//set view engine
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//set public folder as static folder for static file (jadinya tidak perlu lagi define path folder public pada view)
app.use(express.static('public'));
 
//route untuk halaman home
app.get('/',(req, res) => {
  // res.send('Welcome To Express');
  res.render('index',{
    name : "Utomoadito"
  });
});

//route untuk halaman home dengan parameter name
app.get('/name/:name',(reqs, res) => { //link name bisa bebas diisi. Contoh: tes, Tes, Tes Aja lah
  //render file index.hbs
  res.render('index',{
    name : reqs.params.name //request parameter name dari link
  });
});
 
//route untuk halaman about
app.get('/about',(req, res) => {
  res.send('This is about page');
});
//route untuk halaman contact
app.get('/contact',(req, res) => {
  res.send('Contact Us');
});

//Handle Request Melalui Body
//route untuk manampilkan form
app.get('/post',(req, res) => {
  //render file form.hbs
  res.render('form');
});
//route untuk submit form
app.post('/post',(req, res) => {
  //render file form.hbs
  res.render('index',{
    //ambil value dari textname
    name : req.body.textname
  });
});
 
app.listen(port, host, () => {
  console.log('Server is running at port 8000');
});