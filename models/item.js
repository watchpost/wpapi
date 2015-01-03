var mongoose = require('mongoose');

var ItemModel = new mongoose.Schema({
	title: String,
	desc: String,
	price: Number,
	viewed: Number,
	created: Date,
	userid: String,
	catid: String
});

module.exports = mongoose.model('Item', ItemModel);