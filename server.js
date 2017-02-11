const express = require('express'),
    _ = require('lodash'),
    app = express(),
    bodyParser = require('body-parser'),
    storage = require('./lib/models/storage-bootstrapper')(),
    userRouter = require('./lib/middleware/usersRouter'),
    groupRouter = require('./lib/middleware/groupRouter'),
    port = 3001;


app.use(bodyParser.json());
app.use(userRouter(storage));
app.use(groupRouter(storage));


app.listen(port, function () {

    console.log('Mock API server is listening at port %d', port);
});