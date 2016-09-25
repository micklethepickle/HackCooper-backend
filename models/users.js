//dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

//schema

var NotifsSchema = new mongoose.Schema({
	time: Number,
	notifBy: String
})
var usersSchema = new mongoose.Schema({
	_id: Number,
	name: String,
	mon: [Number],
	tue: [Number],
	wed: [Number],
	thu: [Number],
	fri: [Number],
	sat: [Number],
	sund: [Number]
})

//return model
module.exports = restful.model('Users', usersSchema);