const User = require('../models/User');
const router = require('express').Router();
const { verifyToken } = require('./verifyToken')

// Add image to user's library
router.put('/save/:id', verifyToken, async (req, res) => {
    const saveImage = req.body.image
    try {
        const user = await User.findByIdAndUpdate(req.params.id,
            {
                $push: { images: saveImage }
            }
        )
        res.status(200).json(user.images)
    } catch (err) {
        res.status(500).json(err)
    }
})

// Unlike an image in the search page
router.put('/delete/:id', verifyToken, async (req, res) => {
    const deleteImage = req.body.image
    try {
        const user = await User.findByIdAndUpdate(req.params.id,
            {
                $pull: { images: deleteImage }
            }
        )
        res.status(200).json(user.images)
    } catch (err) {
        res.status(500).json(err)
    }
})

// Access user's library
router.get('/library/:id', verifyToken, async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const userLibrary = user.images
        res.status(200).json(userLibrary)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router