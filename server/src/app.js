"use strict";

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const appRouters = require('./routes');

dotenv.config();

// Define the CORS options
const corsOptions = {
    credentials: true,
    origin: '*' // Whitelist the domains you want to allow
};


const app = express();

app.use(express.json());
app.use(cors(corsOptions));

app.use('/', appRouters);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});