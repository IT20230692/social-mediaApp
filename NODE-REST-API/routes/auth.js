const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

//register
router.post('/register', async (req, res) => {
  try {
    //generate new password
    const salt = await bcrypt.genSalt(10);
    const handlePassword = await bcrypt.hash(req.body.password, salt);

    //new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: handlePassword,
    });

    //save user respond
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
});

//login
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json('User not found');
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
     return res.status(400).json('Wrong Password');
    } else {
     return res.status(200).json(user);
    }
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
