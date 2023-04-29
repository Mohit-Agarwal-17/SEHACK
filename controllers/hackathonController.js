const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const asyncHandler = require("express-async-handler");
const { errorHandler } = require("../middleware/errorMiddleware");
const Hackathon = require("../models/hackathonModel");

const postHackathons = asyncHandler(async (req, res) => {
    if(!req.body.name || !req.body.date || !req.body.about || !req.body.organiser || req.body.domain) {
        res.status(400)
        throw new Error("Please add a text field")
    }

    const hackathon = await Hackathon.create({
        name: req.body.name,
        date: req.body.date,
        about: req.body.about,
        organiser: req.body.organiser,
        domain: req.body.domain
    })
    res.status(200).json(hackathon);
})

const getHackathons = asyncHandler(async (req, res) => {
    const hackathons = await Hackathon.find();

    if(!hackathons) {
        res.status(400)
        throw new Error("No hackathons")
    }
    if (hackathons) {
        res.status(200).json(hackathons)
    }
})

const getOneHackathon = asyncHandler(async (req, res) => {
    const { id } = req.params

    // if(!mongoose.Types.ObjectId.isValid(id)) {
    //     res.status(400)
    //     throw new Error("No such Hackathon")
    // }

    const hackathon = await Hackathon.findById(id)

    if (!hackathon) {
        return res.status(404).json({ "error": "No such Hackathon"})
    }

    res.status(200).json(hackathon);
})

module.exports = {
    getHackathons,
    getOneHackathon,
    postHackathons
}