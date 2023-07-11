const User = require('../models/User');
const Library = require('../models/Library');
const router = require('express').Router();
const { verifyToken } = require('./verifyToken')

// Store image in user's library
router.put('/save/:id', verifyToken, async (req, res) => {
    const newImage = req.body.image
    try {
        const user = await User.findById(req.params.id)
        const userLibrary = await Library.findOneAndUpdate(
            { username: user.username },
            {
                $push: { images: newImage }
            }
        )
        res.status(200).json(userLibrary.images)
    } catch (err) {
        res.status(500).json(err)
    }

})

// Access user's library
router.get('/library/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const userLibrary = await Library.findOne({ username: user.username })
        const savedImages = userLibrary.images
        res.status(200).json(savedImages)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router