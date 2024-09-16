const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/testapp");

const userSchema = mongoose.Schema({
    Coursename:String,
    Department:String,
    Duration:Number,
    Eligibility:String,
    Fees:Number,
    Intake:Number,
})

module.exports = mongoose.model('user',userSchema);

