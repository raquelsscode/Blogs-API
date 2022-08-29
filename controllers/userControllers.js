const jwt = require('jsonwebtoken');
const userServices = require('../services/userServices');

const { JWT_SECRET } = process.env;

const user = async (req, res) => {
  try {
    const dataUser = req.body;
    const newUser = await userServices.create(dataUser);
    if (newUser.message) {
      return res.status(409).json(newUser);
    }
    const token = jwt.sign({ email: dataUser.email }, JWT_SECRET);
    return res.status(201).json({ token });
  } catch (err) {
    return res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

const getAll = async (_req, res) => {
  try {
    const users = await userServices.getAll();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

module.exports = {
  user,
  getAll,
};