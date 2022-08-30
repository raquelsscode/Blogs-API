const jwt = require('jsonwebtoken');
const postServices = require('../services/postServices');
const { User } = require('../src/database/models');

const { JWT_SECRET } = process.env;

const post = async (req, res) => {
  const token = req.headers.authorization;

  const { email } = jwt.verify(token, JWT_SECRET);

  const { dataValues: { id } } = await User.findOne({ where: { email } });

  try {
    const postInfo = req.body;

    const validCategory = await postServices.validCategory(postInfo.categoryIds);
    if (validCategory.message) {
      return res.status(400).json(validCategory);
    }
    const newPost = await postServices.create(postInfo, id);
    return res.status(201).json(newPost);
  } catch (err) {
    return res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

module.exports = {
  post,
}; 