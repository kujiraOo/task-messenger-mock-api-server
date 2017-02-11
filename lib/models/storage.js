const _ = require('lodash');

class Storage {

    constructor() {

        this.userIdTracker = 1;
        this.groupIdTracker = 1;
        this.users = [];
        this.groups = [];
    }

    addUser(user) {

        user.id = this.userIdTracker++;
        this.users.push(user);
    }

    removeUser(user) {

        _.pull(this.users, user);
    }

    addGroup(group) {

        group.id = this.groupIdTracker++;
        this.groups.push(group);
    }

    removeGroup(group) {

        _.pull(this.groups, group);
    }

    getUserByUserName(userName) {

        return _.find(this.users, {userName: userName});
    }

    getUserById(id) {

        return _.find(this.users, {id: id});
    }

    getGroupById(id) {

        return _.find(this.groups, {id: id});
    }

    getUserItems() {

        let userItems = [];

        this.users.forEach((user) => {

            userItems.push(user.userItem());
        });

        return userItems;
    }

    getGroupItems() {

        let groupItems = [];

        this.groups.forEach((group) => {

            groupItems.push(group.groupItem());
        });

        return groupItems;
    }
}

module.exports = Storage;