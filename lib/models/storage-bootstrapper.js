const Storage = require('./storage'),
    User = require('./user'),
    Group = require('./group');


module.exports = () => {


// Define mock users
    const hruser = new User({
        "contactDetails": {
            "phoneNumber": "1234567",
            "streetAddress": "Somestreet 6 C 66",
            "city": "Pompeii",
            "postalCode": "02230"
        },
        "status": 'HR_MANAGER',
        "userName": "hruser",
        "firstName": "Bob",
        "lastName": "Chen",
        "id": 1
    });

    const isabel = new User(
        {
            "contactDetails": {
                "phoneNumber": "5239085",
                "streetAddress": "Anotherplanet 10 50",
                "city": "Hellsinki",
                "postalCode": "12345"
            },
            "status": 'ACTIVE',
            "userName": "isabel",
            "firstName": "Isabel",
            "lastName": "Okson",
            "id": 2
        }
    );

    const johny = new User({
        "contactDetails": {
            "phoneNumber": "123512235",
            "streetAddress": "Somehole 1 D 3",
            "city": "Badtown",
            "postalCode": "66666"
        },
        "status": 'ACTIVE',
        "userName": "johny",
        "firstName": "John",
        "lastName": "Fukson",
        "id": 3
    });

    const sammy = new User({
        "contactDetails": {
            "phoneNumber": "514251976",
            "streetAddress": "Badboysstreet 6 7",
            "city": "Moscow",
            "postalCode": "77777"
        },
        "status": 'ACTIVE',
        "userName": "sammy",
        "firstName": "Sam",
        "lastName": "Lolkins",
        "id": 4
    });

// Define mock groups
    const managementGroup = new Group({
        name: 'management',
        id: 1
    });

    const cashierLeadersGroup = new Group({
        name: 'cashier leaders',
        id: 2
    });

    const storageLeadersGroup = new Group({
        name: 'storage leaders',
        id: 3
    });

    const cashiersGroup = new Group({
        name: 'cashiers',
        id: 4
    });

    const storageGroup = new Group({
        name: 'storage',
        id: 5
    });

// Link groups
    managementGroup.linkSubGroup(cashierLeadersGroup);
    managementGroup.linkSubGroup(storageLeadersGroup);

    cashierLeadersGroup.linkSubGroup(cashiersGroup);

    storageLeadersGroup.linkSubGroup(storageGroup);

// Add users
    managementGroup.addUser(isabel);

    cashierLeadersGroup.addUser(johny);

    cashiersGroup.addUser(sammy);

    const storage = new Storage();

    storage.addUser(hruser);
    storage.addUser(isabel);
    storage.addUser(sammy);
    storage.addUser(johny);

    storage.addGroup(managementGroup);
    storage.addGroup(storageLeadersGroup);
    storage.addGroup(cashierLeadersGroup);
    storage.addGroup(cashiersGroup);
    storage.addGroup(storageGroup);

    return storage;
};