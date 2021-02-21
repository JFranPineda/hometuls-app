const mongoose = require('mongoose');

const CoordinateSchema = mongoose.Schema({
    lng: {
        type: String,
        required: true
    },
    lat: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: false,
    },
    location: {
        type: String,
        required: false,
    },
    state: {
        type: String,
        required: false,
    },
    country: {
        type: String,
        required: false,
    }
}, {
    versionKey: false
});

module.exports = mongoose.model('Coordinate', CoordinateSchema);