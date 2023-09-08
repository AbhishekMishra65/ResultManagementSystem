const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
    rollno:{
        type:Number,
        required: true,
        unique: true,
    },
    name:{
        type:String,
        required: true
    },
    dob:{
        type:Date,
        required: true
    },
    score:{
        type:Number,
        required:true
    }
    
});


module.exports = mongoose.model("Student",studentSchema);