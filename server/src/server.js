require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth.routes");
const morgan = require("morgan");
const taskRoutes = require("./routes/task.routes");
const listRoutes = require("./routes/list.routes");
const connectDB = require("./config/db");
const err = require("./middleware/error.middleware");

connectDB();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://192.168.8.108:3000"],
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(morgan('combined'))
app.use("/api/auth", authRoutes);
app.use("/api/task", taskRoutes);
app.use("/api/list", listRoutes);

app.use(err);
app.listen(PORT, () => {
  console.log("server is running on Port", PORT);
});
