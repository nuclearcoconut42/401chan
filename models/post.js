var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');
var moment = require('moment-timezone');


var connection = mongoose.createConnection("mongodb://localhost/401chan");
autoIncrement.initialize(connection);

var schema = new Schema({
    content: {type: String, required: true},
    parent: {type: Number, ref: 'Post'},
    children: [{type: Number, ref: 'Post'}],
    timestamp: {type: String, default: moment().tz('America/New_York').format('M/D/YYYY k:mm:ss')},
    ip: {type: String, required: true}
});

schema.plugin(autoIncrement.plugin, {model: 'Post'});
module.exports = connection.model('Post', schema);