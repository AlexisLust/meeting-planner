
const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    res.json([
        {
            username: 'Wittcode',
            age: 26
        },
        {
            username: 'Mike',
            age: 32
        }
    ])
})

module.exports = router;