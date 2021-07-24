require('./connection')

const Product = require('./models/Product')

async function main() {
    const product = new Product({
        name: 'Keyboard',
        description: 'Gaming keyboard',
        price: 200
    })
    
    const productsaved = await product.save();
    console.log(productsaved)
}

main()
    .then(productsaved => console.log(productsaved))
    .catch(err => console.log(err));
