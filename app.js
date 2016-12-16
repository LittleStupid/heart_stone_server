const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
var cors = require('koa-cors');
const mongoose = require('mongoose');
const controller = require('./controller');

const app = new Koa();

app.use(cors());
// parse request body:
app.use(bodyParser());

// add controller:
app.use(controller());

app.listen(process.env.PORT || 3000);

console.log('app started at port 3000...');

// const connString = 'mongodb://localhost:27017/basic_card_db';
const connString = 'mongodb://sixzero:000000@ds133398.mlab.com:33398/heartstore'
mongoose.connect(connString, { /*config: { autoIndex: false }*/ });

mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + connString);
});

mongoose.connection.on('error',function (err) {
    console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});

process.on('SIGINT', function() {
    mongoose.connection.close(function () {
        console.log('Mongoose default connection closed through app termination');
        process.exit(0);
    });
});
