const { User } = require('../src/database/models');

const create = async (userInfo) => {
    const uniqueUser = await User.findAll({ where: { email: userInfo.email } });

    if (uniqueUser.length > 0) {
      return { message: 'User already registered' };
    }
  
    await User.create(userInfo);
    return true;
  };

  const getAll = async () => {
    const users = await User.findAll({ attributes: {
      exclude: ['password'],
    } });
  
    return users;
  };

  const getById = async (id) => {
    const userId = await User.findOne({ 
      where: { id },
      attributes: {
        exclude: ['password'],
      } });
  
    if (!userId || userId === undefined) {
      return { message: 'User does not exist' };
    }
    return userId;
  };
  
  module.exports = {
    create,
    getAll,
    getById,
  };