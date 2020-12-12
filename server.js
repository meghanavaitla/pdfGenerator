const express = require('express');

const bodyParser = require('body-parser');
var cors = require('cors');
const mongoose = require('mongoose');
var sample=require('./models/sample')
const pdf=require('express-pdf');
const path=require('path');
const app = express();
const port = 3000;




// ******** DB Connection ********

var dbOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, auto_reconnect: true };

mongoose.connect("mongodb+srv://Meghana_07:vnrvjiet@cluster0-lahh1.mongodb.net/FSRTI?retryWrites=true&w=majority", dbOptions);

mongoose.connection.on('connected', function () {

    console.log("Connected to DB");

})

mongoose.connection.on('error', function (err) {

    console.log("Error while connecting to DB: " + err);

})

// ******** DB Connection ********

// *****Middle Wares*******

app.use(bodyParser.json());
app.use(cors());
app.use(pdf);
//****Middle Wares********




app.use('/pdfFromHTML',function(req,res){
    res.pdfFromHTML({
        filename:'generated.pdf',
        html:path.resolve(__dirname,'./src/app/app.component.html')
    })
});
app.use('/pdf',function(req,res){
    res.pdf(path.resolve(__dirname,'./blank.pdf'));
})
app.get('/', (req,res) => {
    res.send('Hello');
})
app.get('/sample', (req, res) => {
    sample.find({},null, {
      limit: 20
    }, (err, docs) => {
      if (err) {
        console.log('Error ' + err);
        res.json({
          error: err
        });
      } else {
        res.json(docs);
      }
    });
  });
app.listen(port, () => {
    console.log('server is running on port '+port);
})