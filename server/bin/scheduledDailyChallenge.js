#!/usr/bin/env node

var User = require('../models/user.js')

function sayHello() {
    console.log('Hello BomBom');
}
sayHello();

User.find({}, (err, users) => {
    users.forEach((user) => {
        console.log(user.name);
    });
});

