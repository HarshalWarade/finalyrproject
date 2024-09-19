const mongoose = require('mongoose')

const jobPreference = new mongoose.Schema({
    location: { type: String },
    jobType: { type: String },
    preferedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true})

export const Jobpref = mongoose.model("Jobpref", jobPreference)