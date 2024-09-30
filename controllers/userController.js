const User = require('../models/User');
const Address = require('../models/Address');

exports.registerUser = async (req, res) => {
  try {
    const { name, address } = req.body;
    const user = await User.create({ name });
    const userAddress = await Address.create({ address, userId: user.id });
    res.status(201).json({ user, userAddress });
  } catch (error) {
    res.status(500).json({ error: 'Failed to register user' });
  }
};
