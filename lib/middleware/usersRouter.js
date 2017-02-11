const express = require('express'),
    User = require('../models/user'),
    hrUserValidator = require('./hrUserValidator');


module.exports = (storage) => {
  
    const router = express.Router();

    router.get('/api/auth', function (req, res) {

        const userName = req.header('Authorization');
        const user = storage.getUserByUserName(userName);

        if (user) {
            res.json(user.userAuthorizationDetails());
        } else {
            res.status(404).send();
        }
    });

    router.get('/api/users', hrUserValidator(storage), function (req, res) {

        res.json(storage.getUserItems());
    });

    router.post('/api/users', hrUserValidator(storage), function (req, res) {

        const newUserData = req.body;

        const user = new User(newUserData);

        storage.addUser(user);

        res.json(user.userItem());
    });

    router.get('/api/users/:id', function (req, res) {

        const id = parseInt(req.params.id);
        const user = storage.getUserById(id);

        if (user) {
            res.json(user.userDetails());
        } else {
            res.status(404).send();
        }
    });

    router.put('/api/users/:id', hrUserValidator(storage), (req, res) => {

        const id = parseInt(req.params.id);
        const user = storage.getUserById(id);

        if (user) {

            const updatedUserData = req.body;

            user.update(updatedUserData);

            res.json(user.userDetails());
        } else {
            res.status(404).send();
        }
    });

    router.delete('/api/users/:id', hrUserValidator(storage), (req, res) => {

        const id = parseInt(req.params.id);
        const user = storage.getUserById(id);

        if (user) {

            storage.removeUser(user);

            res.json(user.userDetails());
        } else {
            res.status(404).send();
        }
    });
    
    return router;
};