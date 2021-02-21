const express = require('express');

require('dotenv').config();

const atlas = express();

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const cors = require('cors');

//Middlewares 
atlas.use(bodyParser.json());
atlas.use(cors());

// Import routes
const coordinatesRoute = require('./routes/coordinates');

atlas.use('/coordinates', coordinatesRoute);

//Routes
atlas.get('/', (req, res) => {
    res.send('We are on home!');
});

// Connect to DB with Mongoose

const url = `mongodb+srv://jpinedas:jfranpineda21_@cluster0.sn7xo.mongodb.net/sample_coordinates?retryWrites=true&w=majority`;

const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}
mongoose.connect(url, connectionParams)
    .then(() => {
        console.log('Connected to database ')
    })
    .catch((err) => {
        console.error(`Error connecting to the database. \n${err}`);
    });


// Start listening the server
atlas.listen(3000);