const router = require('express').Router()
const User = require('../models/User')
const Library = require('../models/Library')
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')

// Register new user
router.post('/register', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        password: CryptoJS.AES.encrypt(
            req.body.password, 
            process.env.PASSWORD_KEY
        ).toString()
    })

    try {
        // Create a new user
        const savedUser = await newUser.save()
        // Create a library for that user
        const newLibrary = new Library({
            username: savedUser.username,
            images: []
        })

        const savedLibrary = await newLibrary.save()
        res.status(201).json(savedUser)
    } catch (err) {
        res.status(500).json(err)
    }
    
})

// Login user
router.post('/login', async (req, res) => {
    
    try {
        const user = await User.findOne({ username: req.body.username })
        !user && res.status(401).json("Wrong username.")

        const originalPassword = CryptoJS.AES.decrypt(
            user.password, 
            process.env.PASSWORD_KEY
        ).toString(CryptoJS.enc.Utf8)

        originalPassword !== req.body.password && res.status(401).json("Wrong password.")

        const accessToken = jwt.sign({
            id: user._id
        }, process.env.JWT_KEY,
        {expiresIn: "3d"}
        )

        const { password, ...userInfo } = user._doc
        
        res.status(200).json({...userInfo, accessToken})
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router