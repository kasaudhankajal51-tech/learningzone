import mongoose from "mongoose";

const user = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        // Optional because OAuth users (Google) won't have a password
    },
    image: {
        type: String,
    },
    provider: {
        type: String,
        default: "credentials",
    },
});

const User = mongoose.models.User || mongoose.model("User", user);

export default User;