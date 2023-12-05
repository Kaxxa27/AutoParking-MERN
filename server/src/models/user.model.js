const mongoose = require("mongoose");
const Account = require('./account.model');

const userScheme = new mongoose.Schema({
    username:{
        type: String,
        required: [true, 'Username is required'],
        unique: true,
        minlength: [2, 'Username cannot be shorter than 2 characters'],
        maxlength: [45, 'Username cannot be longer than 45 characters'],
        trim: true,
    },
    password:{
        type: String,
        required: true,
        minlength: [3, 'The password cannot be shorter than 3 characters'],
    },
    name:{
        type: String,
        trim: true,
    },
    age:{
        type: Number,
        min: [0, 'The age cannot be less than 0'],
        max: [150, 'The age cannot be more than 150'],
    },
});

userScheme.post('findOneAndDelete', async (doc) => {
    try {
        if (doc) {
            await Account.deleteOne({ user: doc._id });
        }
    } catch (error) {
        console.error(error);
    }
});

const User = mongoose.model('User', userScheme);

module.exports = User;