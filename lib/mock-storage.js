const _ = require('lodash');

class MockStorage {

    constructor(users, groups) {

        this.users = users;
        this.groups = groups;
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

        this.users.forEach((group) => {

            groupItems.push(group.userItem());
        });

        return groupItems;
    }
}

module.exports = MockStorage;