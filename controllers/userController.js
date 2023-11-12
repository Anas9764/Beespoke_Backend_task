const User = require('../models/userModel');

exports.createUserProfile = async (req, res) => {
  try {
    const { customerName, username, password, gender, preferredCategory } = req.body;

    // Check if username is duplicate
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    // Create a new user record
    const newUser = new User({
      customerName,
      username,
      password,
      gender,
      preferredCategory,
    });

    await newUser.save();

    res.status(201).json({ message: 'User profile created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
