// model for the users

// basic imports
import mongoose from 'mongoose';

// schema (what every user will have)
const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    id: { type: String }
});

// Creating and exporting a mongoose model of a User
const User = mongoose.model('User', userSchema);

export default User;