const User = require('./user');

const deleteUser = async (email) => {
  try {
    const result = await User.deleteOne({ email });
    if (result.deletedCount > 0) {
      console.log('User deleted successfully');
    } else {
      console.log('No user found with that email');
    }
  } catch (error) {
    console.error('Error deleting user:', error.message);
  }
};


deleteUser('johndoe@example.com');
