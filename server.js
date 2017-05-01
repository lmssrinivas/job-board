
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const ejs = require('ejs');
const scribeLog = require('scribe-js')();
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const PORT = process.env.PORT || 3000;


var app=  express();
var config = require('./config/env');

// Database- mongodb


var options = {
    server: {
        socketOptions: {
            keepAlive: 300000, connectTimeoutMS: 30000
        }
    },
    replset: {
        socketOptions: {
            keepAlive: 300000,
            connectTimeoutMS : 30000
        }
    }
};
mongoose.connect(config.mlabDB,options);
var conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'connection error:'));

conn.once('open', function() {
    // Wait for the database connection to establish, then start the app.
});

// Logging
app.use(scribeLog.express.logger());
app.use('/logs', scribeLog.webPanel());

app.use(express.static(path.join(__dirname,'dist')));

app.use(favicon(__dirname + '/dist/images/favicon.ico'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));


app.use(require('./server/routes/index'));



app.set('views',path.join(__dirname,'dist'));
app.set('views engine','html');
app.engine('html',ejs.renderFile);


app.listen(PORT, function (req,res) {
    console.log('Server is running on the port : '+ PORT);
});
