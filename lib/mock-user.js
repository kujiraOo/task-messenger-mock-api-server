const _ = require('lodash');

const userItemProps = [
    'id',
    'userName',
    'lastName',
    'firstName'
];

const userAuthorizationDetailsProps = userItemProps.concat([
    'subGroups',
    'groups',
    'superGroups',
    'isHR',
]);

const userDetailsProps = userAuthorizationDetailsProps.concat([
   'contactDetails'
]);


class MockUser {

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
}

module.exports = MockUser;