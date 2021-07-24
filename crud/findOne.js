require('../connection')

const User = require('../models/User')

async function getUser() {
    const user = await User.findOne({username: 'User1'});
    console.log(user)
}

getUser();