var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment-timezone');


var connection = mongoose.createConnection("mongodb://localhost/401chan");

var schema = new Schema({
    ip: {type: String, required: true},
    timestamp: {type: String, default: moment().tz('America/New_York').format('M/D/YYYY k:mm:ss')},
});

module.exports = connection.model('Bans', schema);