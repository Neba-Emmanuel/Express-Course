const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
const router = require('./routes/api/members');

const app = express();

// Init middleware
app.use(logger);

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Static folder for server
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/members',require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))