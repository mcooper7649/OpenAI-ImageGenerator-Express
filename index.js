const express = require('express');
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();

//Enable body parser

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use('./openai', require('./routes/openaiRoutes'));

app.listen(PORT, () => console.log(`Server Started on ${process.env.PORT}`));
