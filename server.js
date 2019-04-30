//Install express server
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/imprint'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/imprint/index.html'));
});

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
       "Origin, X-Requested-With, Content-Type, Accept, Authorization"
       );
    if(req.method === 'OPTIONS'){
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
      return res.status(200).json({});
    }
  next();
  });

const db = require('./config/keys').mongoURI;

mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));


app.use('/api/items', items)

app.use('/timestamp', (req, res) => {
    res.send(`${Date.now()}`);
})

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 5000);