require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth.routes");
const taskRoutes = require("./routes/task.routes");
const listRoutes = require("./routes/list.routes");
const connectDB = require("./config/db");

connectDB();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/task", taskRoutes);
app.use("/api/list", listRoutes);

app.listen(PORT, () => {
  console.log("server is running on Port", PORT);
});
