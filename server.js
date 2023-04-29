const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const colors = require("colors");
const { connectDB } = require("./config/db");
const { protect } = require("./middleware/authMiddleware");
const cors = require('cors');

connectDB();

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/api/hackathons", require("./routes/hackathonRoutes"))
app.use("/api/users", require("./routes/userRoutes"))
app.use("/api/tasks", protect, require("./routes/taskRoutes"))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))