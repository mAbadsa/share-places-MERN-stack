const express = require("express");
const router = express.Router();

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        location: {
            lat: 40.7484474,
            lng: -73.9871516
        },
        address: '20 W 34th St, New York, NY 10001',
        creator: 'u1'
    }
];


router.route('/').get((req, res, next) => {
    res.json({ messgae: "Hello" });
})

router.route('/:pid').get((req, res, next) => {
    const placeId = req.params.pid;
    const place = DUMMY_PLACES.filter(item => item.id === placeId)
    res.json({ messgae: place });
})

router.route('/users/:uid').get((req, res, next) => {

})

module.exports = router;