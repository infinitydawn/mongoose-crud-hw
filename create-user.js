const User = require('./user');

const createUser = async () => {
  try {
    const newUser = new User({
      name: 'John Doe',
      email: 'johndoe@example.com',
      age: 30,
    });

    await newUser.save();
    console.log('User created successfully:', newUser);
  } catch (error) {
    console.error('Error creating user:', error.message);
  }
};

createUser();
