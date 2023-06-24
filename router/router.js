const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    res.json('Router1')
})


module.exports = router;
