var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var sampleSchema = new Schema({
    name:String,
    institution:String,
    articletype:String,
    title:String,
    abstract:String,
    fundinginfo:String
    
}
);
var sample = mongoose.model('sample', sampleSchema, 'sample');
module.exports = sample;