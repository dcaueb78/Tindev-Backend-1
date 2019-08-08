const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-culqu.mongodb.net/omnistack?retryWrites=true&w=majority', {
	useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(process.env.PORT || 5000);