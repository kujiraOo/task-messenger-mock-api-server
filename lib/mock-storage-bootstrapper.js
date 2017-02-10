const MockStorage = require('./mock-storage'),
    MockUser = require('./mock-user'),
    MockGroup = require('./mock-group');

// mockStorage.addUs

// Define mock users
const hruser = new MockUser({
    "contactDetails": {
        "phoneNumber": "1234567",
        "streetAddress": "Somestreet 6 C 66",
        "city": "Pompeii",
        "postalCode": "02230"
    },
    "isHR": true,
    "userName": "hruser",
    "firstName": "Bob",
    "lastName": "Chen",
    "id": 1
});

const isabel = new MockUser(
    {
        "contactDetails": {
            "phoneNumber": "5239085",
            "streetAddress": "Anotherplanet 10 50",
            "city": "Hellsinki",
            "postalCode": "12345"
        },
        "isHR": false,
        "userName": "isabel",
        "firstName": "Isabel",
        "lastName": "Okson",
        "id": 2
    }
);

const johny = new MockUser({
    "contactDetails": {
        "phoneNumber": "123512235",
        "streetAddress": "Somehole 1 D 3",
        "city": "Badtown",
        "postalCode": "66666"
    },
    "isHR": false,
    "userName": "johny",
    "firstName": "John",
    "lastName": "Fukson",
    "id": 3
});

const sammy = new MockUser({
    "contactDetails": {
        "phoneNumber": "514251976",
        "streetAddress": "Badboysstreet 6 7",
        "city": "Moscow",
        "postalCode": "77777"
    },
    "isHR": false,
    "userName": "sammy",
    "firstName": "Sam",
    "lastName": "Lolkins",
    "id": 4
});

// Define mock groups
const management = new MockGroup({
    name: 'management',
    id: 1
});

const cashierLeaders = new MockGroup({
    name: 'cashier leaders',
    id: 2
});

const storageLeaders = new MockGroup({
    name: 'storage leaders',
    id: 3
});

const cashiers = new MockGroup({
    name: 'cashiers',
    id: 4
});

const storage = new MockGroup({
    name: 'storage',
    id: 5
});

// Link groups
management.linkSubGroup(cashierLeaders);
management.linkSubGroup(storageLeaders);

cashierLeaders.linkSubGroup(cashiers);

storageLeaders.linkSubGroup(storage);

// Add users
management.addUser(isabel);

cashierLeaders.addUser(johny);

cashiers.addUser(sammy);

module.exports = new MockStorage(
    [
        hruser,
        isabel,
        sammy,
        johny
    ], [
        management,
        cashierLeaders,
        storageLeaders,
        cashiers,
        storage
    ]);