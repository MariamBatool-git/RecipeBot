const mongoose = require('mongoose');
// schema
const Schema = mongoose.Schema;
const imageSchema = new Schema({
    Name : {
        type : String,
        unique : true
    },
    Image : {
        data: Buffer,
        contentType: String
    }
});  
//model 
const Image = mongoose.model('Image', imageSchema);

module.exports = Image;