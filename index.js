const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3005;

const app = express();

// Enable body passer
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/openai', require('./routes/openaiRoutes'));

app.listen(port, () => console.log(`Server started on port ${port}`));