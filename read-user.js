const User = require('./user');

// Find all users
const findAllUsers = async () => {
  const users = await User.find({});
  console.log('All Users:', users);
};

// Find a user by email
const findUserByEmail = async (email) => {
  const user = await User.findOne({ email });
  console.log('User found:', user);
};

findAllUsers();
findUserByEmail('johndoe@example.com');
