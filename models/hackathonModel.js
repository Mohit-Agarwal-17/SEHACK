const mongoose = require("mongoose");

const hackathonSchema = mongoose.Schema({

    name:{
        type: String,
        required: [true, "Please add name"]
    },
    date:{
        type: String,
        required: [true, "Please add date of hackathon"]
    },
    about:{
        type: String,
        required: [true, "Please add about"]
    },
    organiser:{
        type: String,
        required: [true, "Please add organiser name"]
    },
    domain:{
        type: String,
        required: [true, "Please add domain"]
    },

}, { timestamps: true })

module.exports = mongoose.model("Hackathon", hackathonSchema)

// name, date, about, organiser