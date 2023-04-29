const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel")
const { errorHandler } = require("../middleware/errorMiddleware");


// @desc Register new User
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    const { email, password} = req.body;

    if (!email || !password) {
        res.status(400)
        throw new Error("Please add all fields")
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400)
        throw new Error("User already exists")
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        // name: name,
        email: email,
        password: hashedPassword,
        // domain1: domain1,
        // domain2: domain2,
        // domain3: domain3,
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error("Invalid user data")
    }
})

// @desc Authenticate a User
// @route POST /api/users
// @access Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email })

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error("Invalid credentials")
    }

})

// @desc Get User data
// @route GET /api/users/me
// @access Private
const getMe = asyncHandler(async (req, res) => {
    const{_id, name, email, domain1, domain2, domain3} = await User.findById(req.user.id)

    res.status(200).json({
        id: _id,
        name,
        email,
        domain1,
        domain2,
        domain3
    })
})

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d"
    })
}


module.exports = {
    registerUser,
    loginUser,
    getMe
}