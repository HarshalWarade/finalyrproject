const mongoose = require('mongoose')
const jobPref = require('./jobpreference.models')
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {type: String, required: true},
    password: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    dob: {type: Date, required: true},
    mobile: {type: String, required: true},

    // after registration
    resume: {type: String},
    videoIntroduction: {type: String},
    jobPref: jobPref,
    


}, {timestamps: true})

export const User = mongoose.model("User", userSchema)

