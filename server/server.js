require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const expressJwt = require('express-jwt');
const config = require('config.json');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use JWT auth to secure the api
app.use('/',expressJwt({ secret: config.secret }));

// routes
app.use('/users', require('./controllers/users.controller'));

// start server
const port = process.env.NODE_ENV === 'production' ? 80 : 4800;
const server = app.listen(port, () => {
    console.log('Server listening on port ' + port);
});
