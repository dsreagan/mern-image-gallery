const mongoose = require('mongoose')

const librarySchema = new mongoose.Schema(
    {
        username: {type: String, required: true, unique: true},
        images: {type: Array}
    }
)

module.exports = mongoose.model('Library', librarySchema)