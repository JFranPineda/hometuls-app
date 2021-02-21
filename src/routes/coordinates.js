const express = require('express');

const router = express.Router();

const Coordinate = require('../models/Coordinate');

// Get a Hundred (100) Coordinates
router.get('/', async (req, res) => {
    try {
        const coordinates = await Coordinate.find().limit(100);
        res.json(coordinates);
    } catch (err) {
        res.json({ message: err });
    }
});

// Get all the Coordinates
router.get('/all', async (req, res) => {
    try {
        const coordinates = await Coordinate.find();
        res.json(coordinates);
    } catch (err) {
        res.json({ message: err });
    }
});

// Submit a Coordinate
router.post('/', async (req, res) => {
    const coordinate = new Coordinate({
        lat: req.body.lat,
        lng: req.body.lng,
        address: req.body.address,
        country: req.body.country,
        state: req.body.state
    });

    try {
        const savedCoordinate = await coordinate.save();
        res.json(savedCoordinate);

    } catch (err) {
        res.json({ message: err });
    }
});

// Update a Coordinate
router.patch('/:coordinateId', async (req, res) => {
    try {
        const updatedCoordinate = await Coordinate.updateOne({ _id: req.params.coordinateId },
            {
                $set: {
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    email: req.body.email,
                    phone: req.body.phone
                }
            });
        res.json(updatedCoordinate);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;