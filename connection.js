const mongoose = require('mongoose')
const uri = 'mongodb://127.0.0.1:27017/mywebstore';
const db =mongoose.connection;
mongoose.connect(uri, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
});

db.once('open', _ =>{
    console.log('Database is connected to', uri);
})

db.on('error', _ => {
    console.log(err)
})