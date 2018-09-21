const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Create User Schema

const VideoSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    pageName: {
        type: String,
    },
    uid: {
        type: String,
    },
    video: {
        type: String,
        required: true,
    },
    views: {
        type: Number,
        default: 0,
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
    }
})

module.exports = User = mongoose.model('users', VideoSchema)