const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/', async (req, res) => {
	res.send('cool')
})

module.exports = router