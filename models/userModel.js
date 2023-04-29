const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        // required: [true, "Please add a name"]
    },
    email: {
        type: String,
        required: [true, "Please add an name"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please add a password"]
    },
    domain1: {
        type: String,
        // required: [true, "Please add a domain"]
    },
    domain2: {
        type: String,
        // required: [true, "Please add a domain"]
    },
    domain3: {
        type: String,
        // required: [true, "Please add a domain"]
    },
    myTasks: [{
        _id: { type: mongoose.Schema.Types.ObjectId, required: true, auto: true },
        type: String
    }]
}, {
    timestamps: true
})

module.exports = mongoose.model("User", userSchema);