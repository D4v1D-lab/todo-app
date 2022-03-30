// @ts-check
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    verifyPassword: {
        type: String,
        required: true,
    },
    accountType: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("user", userSchema);