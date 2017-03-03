const express = require('express'),
    hrUserValidator = require('./hrUserValidator')
    Group = require('../models/group');

module.exports = (storage) => {

    const router = express.Router();

    router.get('/groups', hrUserValidator(storage), (req, res) => {

        res.json(storage.getGroupItems());
    });

    router.post('/groups', hrUserValidator(storage), (req, res) => {

        const groupData = req.body;

        const group = new Group(groupData);

        storage.addGroup(group);

        res.json(group.groupItem());
    });

    router.get('/groups/:id', (req, res) => {

        const id = parseInt(req.params.id);
        const group = storage.getGroupById(id);

        if (group) {
            res.json(group.groupDetails());
        } else {
            res.status(404).send();
        }
    });

    router.put('/groups/:id', hrUserValidator(storage), (req, res) => {

        const id = parseInt(req.params.id);
        const group = storage.getGroupById(id);

        if (group) {

            const updatedGroupData = req.body;

            group.update(updatedGroupData);

            res.json(group.groupDetails());
        } else {
            res.status(404).send();
        }
    });

    router.delete('/groups/:id', hrUserValidator(storage), (req, res) => {

        const id = parseInt(req.params.id);
        const group = storage.getGroupById(id);

        if (group) {

            storage.removeGroup(group);

            res.json(group.groupDetails());
        } else {
            res.status(404).send();
        }
    });

    return router;
};