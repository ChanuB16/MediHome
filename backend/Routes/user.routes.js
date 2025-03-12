import express from 'express';
import User from "../Models/user.model.js";

const router = express.Router();

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !password || !email) {
        return res.status(400).json({ success: false, error: "Please provide all the fields" });
    }

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email:email });
        if (existingUser) {
            return res.status(409).json({ success: false, error: "User already exists with this email" });
        }

        // Create a new user
        const newUser = new User({ username, email, password });
        await newUser.save();

        res.status(201).json({ success: true, message: "User Registration successful", data: newUser });
    } catch (e) {
        console.error(e);
        res.status(500).json({ success: false, error: `Server error ${e}` });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, error: "Please enter email and password" });
    }

    try {
        const user = await User.findOne({ email });
        if (!user || user.password !== password) {
            return res.status(401).json({ success: false, error: "Invalid email or password" });
        }

        res.status(200).json({ success: true, message: "Login successful", data: user });
    } catch (e) {
        console.error(e);
        res.status(500).json({ success: false, error: `Server error ${e}` });
    }
});
router.get('/getusers', async (req, res) => {
    try{
        const users = await User.find({});
        res.status(200).json({success: true, data: users});
    }
    catch(e){
        console.error(e);
        res.status(500).json({error: e});
    }
});







export default router;