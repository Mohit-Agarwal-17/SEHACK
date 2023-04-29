const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel")
const { errorHandler } = require("../middleware/errorMiddleware");

const addTask = asyncHandler(async (req, res) => {
    const { id, task } = req.body
    const user = await User.findById({ _id: id })

    if (user) {
        user.myTasks.push(task);
        await user.save();

        res.status(200).json(user)
    } else {
        res.status(400)
        throw new Error("Invalid user")
    }
})

const deleteTask = asyncHandler(async (req, res) => {
    const { userId, taskId } = req.body;
    const user = await User.findById(userId);

    if (user) {
        user.myTasks.splice(taskId, 1);
        await user.save();
        res.json(user);
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});


module.exports = {
    addTask,
    deleteTask
}