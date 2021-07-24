require('../connection')

const Product = require('../models/Product')

const someFunction = async () => {
    // const result = await Product.deleteMany({name: 'keyboard'})
    // const result = await Product.deleteOne({name: 'keyboard'})
    // const result = await Product.findOneAndDelete({name: 'Keyboard'})
     const result = await Product.findByIdAndDelete('60fc8ae8396817183400d38b')
    console.log(result)
}

someFunction();