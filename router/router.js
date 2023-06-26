const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json('Router1')
})
router.post('/', (req, res) => {
    res.json('Router1')
})
router.put('/', (req, res) => {
    res.json('Router1')
})
router.delete('/', (req, res) => {
    res.json('Router1')
})

module.exports = router;
