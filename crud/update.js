require('../connection')

const User = require('../models/User')

const someFunction = async () => {
    const user = await User.findOne({username: 'User2'});
    console.log(user)
    user.password = 'nuevaContraseña'
    user.save();
}

const otherFunction = async () => {
    const user = await User.findOneAndUpdate({username: 'User2'}, {
        name: 'nuevo'
    }, {new: true})
    console.log(user)
}

async function updateUsers() {
    const user = await User.update({username: 'User1'}, {
        password: 'segura'
    });
    console.log(user)
}
otherFunction();
