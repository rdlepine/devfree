const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Create User Schema

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    pageName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
    },
    missionStatement: {
        type: String,
    },
    createDate: {
        type: Date,
        default: Date.now,
    },
    lastAccessed: {
        type: Date,
        default: Date.now,
    },
    active: {
        type: Number,
        default: 1,
    },
    admin: {
        type: Number,
        default: 0,
    }
})

module.exports = User = mongoose.model('users', UserSchema)