const { timeStamp } = require("console");
const mongoose = require("mongoose");

const NoteSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref:"User",
        required : true
    }
},{timeStamp : true});

module.exports = mongoose.model.apply("Note",NoteSchema);