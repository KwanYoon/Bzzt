// basic imports
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// importing user schema
import User from '../models/userModel.js';

export const signin = async (res, req) => {
    // post requests are received with req.body
    const { email, password } = req.body;

    try {
        // looking if email already exists
        const existingUser = await User.findOne({ email });

        // If user does not exist...
        if (!existingUser) {
            return res.status(404).json({ message: "User does not exist" });
        }

        // if user does exist
        // check if password is correct
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid password" });
        }

        // getting json web token if all credentials correct, expiring in 1 hour, and return it
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: '1h' });
        res.status(200).json({ result: existingUser, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong. Please try again" });
    }
}

export const signup = async (res, req) => {
    const { email, password, confirmPassword, firstName, lastName } = req.body;

    try {
        // looking if email already exists        
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists with the email." });
        }

        // checking if password not equal
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords don't match." });
        }

        // hashing password
        const hashedPassword = await bcrypt.hash(password, 12);

        // making new user
        const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });

        // making token with result, and return both
        const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: '1h' });
        res.status(200).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong. Please try again" });
    }
}