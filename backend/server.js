import  userroutes from "./Routes/user.routes.js"


import express from "express";
import mongoose from "mongoose";

import cors from "cors";

const URI = "mongodb+srv://heylibandara:Zm4MbI5ufPUt92ah@cluster0.snxkp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON requests

// MongoDB Connection
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => console.log("MongoDB connected!"));

app.use("/api",userroutes);

// Start Server
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
