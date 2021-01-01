const { Router } = require('express');

const router = Router();

router.get('/test', (req, res) => {
    const data = {
        "name": "Daniel",
        "web": "test.com"
    };
    res.json(data);
});

module.exports = router;
