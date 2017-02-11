const _ = require('lodash');

const groupItemProps = [
    'id',
    'name'
];

const groupDetailsProps = groupItemProps.concat([
    'users',
    'superGroup',
    'subGroups'
]);


class Group {

    constructor(options) {

        _.assign(this, options);

        this.users = [];
        this.superGroup = null;
        this.subGroups = [];
    }

    groupItem() {

        return _.pick(this, groupItemProps);
    }

    groupDetails() {

        return _.pick(this, groupDetailsProps);
    }

    linkSubGroup(group) {

        this.subGroups.push(group.groupItem());
        group.superGroup = this.groupItem();
    }

    addUser(user) {

        this.users = _.union(this.users, [user.userItem()]);

        if (this.superGroup) {
            user.superGroups = _.union(user.superGroups, [this.superGroup]);
        }

        user.groups = _.union(user.groups, [this.groupItem()]);
        user.subGroups = _.union(user.subGroups, this.subGroups);
    }

    update(groupData) {

        _.assign(this, groupData);
    }
}

module.exports = Group;