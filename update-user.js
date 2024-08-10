const User = require('./user');

const updateUser = async (email, newAge) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { email },
      { age: newAge },
      { new: true }
    );
    console.log('User updated successfully:', updatedUser);
  } catch (error) {
    console.error('Error updating user:', error.message);
  }
};

// Example 
updateUser('johndoe@example.com', 55);
