// server/routes/auth.js
const router = require("express").Router();
const User = require("../models/users.models");
const bcrypt = require("bcrypt");

// Register a new user
router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if user already exists
    const userExists = await User.findOne({ username });
    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = new User({
      username,
      password: hashedPassword,
    });
    await user.save();

    // Send success response
    res.json({ message: 'User created successfully' });
  } catch (err) {
    console.error(err);
    // Check if response has already been sent
    if (!res.headersSent) {
      // Send error response
      res.status(500).json({ error: 'Server error' });
    }
  }
});


// Login a user
router.post("/login", async (req, res) => {
  try {
    // Find the user by username
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("User not found");

    // Check the password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(400).json("Wrong credentials!");

    // Respond with the user object
    // delete & remove password
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
