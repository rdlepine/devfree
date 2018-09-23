const express = require('express')
const router = express.Router()
const Video = require('../../models/Video')


// @route GET api/profile/test
// @desc Tests profile route
// @access Public
router.get('/', (req, res) => {
    res.json({videos: "profile work"})
})

router.post("/postvideo", (req, res) => {
    res.json()
})

module.exports = router