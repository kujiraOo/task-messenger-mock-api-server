const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mockStorage = require('./lib/mock-storage-bootstrapper'),
    port = 3001;

// console.log(mockStorage);

app.use(bodyParser.json());

app.get('/api/auth', function (req, res) {

    let userName = req.header('Authorization');
    let user = mockStorage.getUserByUserName(userName);

    if (user) {
        res.json(user.userAuthorizationDetails());
    } else {
        res.status(404).send();
    }

});

app.get('/api/users', function (req, res) {

    res.json(mockStorage.getUserItems());
});

app.listen(port, function () {

    console.log('Mock API server is listening at port %d', port);
});