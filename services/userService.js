
const User = require('../models/User');

async function getAllUsers() {
  return await User.find();
}

async function getUserById(id) {
  return await User.findById(id);
}

async function createUser(data) {
  const user = new User(data);
  return await user.save();
}

async function updateUser(id, data) {
  return await User.findByIdAndUpdate(id, data, { new: true, runValidators: true });
}

async function deleteUser(id) {
  return await User.findByIdAndDelete(id);
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
