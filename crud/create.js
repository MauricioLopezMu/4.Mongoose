require('../connection')

const Product = require('../models/Product')

const createProducts = async () => {
    const laptopOne = new Product({
        name: 'laptop lenovo',
        description: 'lenovo sxv'
    })
    await laptopOne.save();

    const laptopTwo = new Product({
        name: 'laptop HP',
        description: 'Hp pavilion'
    })
    await laptopTwo.save();
}

createProducts();