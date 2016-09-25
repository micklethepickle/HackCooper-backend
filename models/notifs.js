//dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

//schema
var notifsSchema = new mongoose.Schema({
	time: Number,
	notifBy: String,
	notifTo: Number

})

//return model
module.exports = restful.model('Notifs', notifsSchema);