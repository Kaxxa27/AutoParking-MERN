const User = require('../models/user.model');

// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: 'Error', error: error.message});
    }
};

// Get User by Id 
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if(!user){
            return res.status(404).json({meassage: 'User was not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: 'Error', error: error.message });
    }
};



// Create new User
exports.createUser = async (req, res) => {

    try {
        // Creating new User
        const newUser = new User({...req.body});
        
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({message: 'Error', error: error.message});
    }
}

// Update User
exports.updateUser = async (req, res) => {
    try {

      await User.updateOne({ _id: req.params.id }, ...req.body);
  
      res.status(200).json({ message: 'The user has been successfully updated' });
    } catch (error) {
      res.status(500).json({ message: 'Erorr', error: error.message });
    }
};

// Remove User
exports.deleteUser = async (req, res) => {
    try {
      // Checking if the user exists with ID
      const existingUser = await User.findById(req.params.id);
      if (!existingUser) {
        return res.status(404).json({ message: 'User was not found' });
      }
  
      await existingUser.remove();
  
      res.status(200).json({ message: 'The user has been successfully deleted' });
    } catch (error) {
      res.status(500).json({ message: 'Error', error: error.message });
    }
};

