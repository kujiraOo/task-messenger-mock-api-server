const _ = require('lodash');

const userItemProps = [
    'id',
    'userName',
    'lastName',
    'firstName',
    'status'
];

const userAuthorizationDetailsProps = userItemProps.concat([
    'subGroups',
    'groups',
    'superGroups',
    'isHR'
]);

const userDetailsProps = userAuthorizationDetailsProps.concat([
   'contactDetails'
]);


class User {

    constructor(options) {

        _.assign(this, options);

        this.superGroups = [];
        this.groups = [];
        this.subGroups = [];
    }

    userItem() {

        return _.pick(this, userItemProps);
    }

    userAuthorizationDetails() {

        return _.pick(this, userAuthorizationDetailsProps);
    }

    userDetails() {

        return _.pick(this, userDetailsProps);
    }

    update(userData) {

        _.assign(this, userData);
    }
}


module.exports = User;