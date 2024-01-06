"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = exports.getUsers = void 0;
const users = [
    {
        id: 0,
        firstName: 'Cristiano',
        lastName: 'Ronaldo',
        userName: 'CR7'
    },
    {
        id: 1,
        firstName: 'Lionel',
        lastName: 'Messi',
        userName: 'LM10'
    },
    {
        id: 2,
        firstName: 'Victor',
        lastName: 'Boniface',
        userName: 'Bonfilius'
    },
    {
        id: 3,
        firstName: 'Yasin',
        lastName: 'Trainer',
        userName: 'Yasir!'
    }
];
const getUsers = (req, res) => {
    res.json(users);
};
exports.getUsers = getUsers;
const getUserById = (req, res) => {
    const userToDisplay = {
        id: 4,
        firstName: 'Yossi',
        lastName: 'Kettler',
        usernName: 'Josef'
    };
    res.json(userToDisplay);
};
exports.getUserById = getUserById;
