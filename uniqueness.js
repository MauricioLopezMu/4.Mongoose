require('./connection')

const User = require('./models/User')

async function createUsers() {
    const userOne = new User({
        username: 'User3',
        password: '12345'
    })
    await userOne.save();

    const userTwo = new User({
        username: 'User4',
        password: '12345'
    })
    await userTwo.save();
}

createUsers();