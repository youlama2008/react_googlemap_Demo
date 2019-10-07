const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/map';

// connect DB
mongoose.connect(
	DB_URL,
	{
		useNewUrlParser: true, 
		useUnifiedTopology: true, 
		useCreateIndex: true,
		useFindAndModify: false
	}
);

let db = mongoose.connection;

db.on('connected', function () {
    console.log('Mongoose connection open to ' + DB_URL);
});

db.on('error',function (err) {
    console.log('Mongoose connection error: ' + err);
});

db.on('disconnected', function () {
    console.log('Mongoose connection disconnected');
});

module.exports = mongoose;