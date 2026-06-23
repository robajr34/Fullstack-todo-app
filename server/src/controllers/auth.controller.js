const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.schema");

const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    // Validation
    if (!username || !email || !password) {
      const error = new Error("All fields are required");
      error.status = 400;
      return next(error);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      const error = new Error("Invalid email format");
      error.status = 400;
      return next(error);
    }

    if (password.length < 8) {
      const error = new Error("Password must be at least 8 characters long");
      error.status = 400;
      return next(error);
    }

    const userExist = await User.findOne({ email });

    if (userExist) {
      const error = new Error("Email already exists");
      error.status = 409;
      return next(error);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      success: true,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (err) {
    return next(err);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      const error = new Error("All fields are required");
      error.status = 400;
      return next(error);
    }

    const user = await User.findOne({ email });

    if (!user) {
      const error = new Error("Invalid credentials");
      error.status = 401;
      return next(error);
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      const error = new Error("Invalid credentials");
      error.status = 401;
      return next(error);
    }

    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      },
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });

    return res.status(200).json({
      success: true,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (err) {
    return next(err);
  }
};

const logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });

  return res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
};

const dashboard = async (req, res, next) => {
  try {
    const userId = req.user.userId;

    const user = await User.findById(userId).select("-password");

    if (!user) {
      const error = new Error("User not found");
      error.status = 404;
      return next(error);
    }

    return res.status(200).json({
      success: true,
      user,
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  signup,
  login,
  logout,
  dashboard,
};
