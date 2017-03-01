const _ = require('lodash');

const groupItemProps = [
    'id',
    'name'
];

const groupDetailsProps = groupItemProps.concat([
    'users',
    'managerGroup',
    'subordinateGroups'
]);


class Group {

    constructor(options) {

        _.assign(this, options);

        this.users = [];
        this.managerGroup = null;
        this.subordinateGroups = [];
    }

    groupItem() {

        return _.pick(this, groupItemProps);
    }

    groupDetails() {

        return _.pick(this, groupDetailsProps);
    }

    linkSubGroup(group) {

        this.subordinateGroups.push(group.groupItem());
        group.managerGroup = this.groupItem();
    }

    addUser(user) {

        this.users = _.union(this.users, [user.userItem()]);

        if (this.managerGroup) {
            user.managerGroups = _.union(user.managerGroups, [this.managerGroup]);
        }

        user.groups = _.union(user.groups, [this.groupItem()]);
        user.subordinateGroups = _.union(user.subordinateGroups, this.subordinateGroups);
    }

    update(groupData) {

        _.assign(this, groupData);
    }
}

module.exports = Group;