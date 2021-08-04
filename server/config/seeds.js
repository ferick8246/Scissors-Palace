const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  //const categories = await Category.insertMany([
   // { name: '' },
    //{ name: '' },
    //{ name: '' },
    //{ name: '' },
    //{ name: '' }
  //]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: '',
      description:
        '',
      image: '',
      category: categories[0]._id,
      price: 2.99,
      quantity: 500
    },
    {
      name: '',
      description:
        '',
      image: '',
      category: categories[0]._id,
      price: 1.99,
      quantity: 500
    },
    {
      name: '',
      category: categories[1]._id,
      description:
        '',
      image: '',
      price: 7.99,
      quantity: 20
    },
    {
      name: '',
      category: categories[1]._id,
      description:
        '',
      image: '',
      price: 3.99,
      quantity: 50
    },
    {
      name: '',
      category: categories[1]._id,
      description:
        '',
      image: '',
      price: 14.99,
      quantity: 100
    },
    {
      name: '',
      category: categories[2]._id,
      description:
        '',
      image: '',
      price: 399.99,
      quantity: 30
    },
    {
      name: '',
      category: categories[2]._id,
      description:
        '',
      image: '',
      price: 199.99,
      quantity: 30
    },
    {
      name: '',
      category: categories[3]._id,
      description:
        '',
      image: '',
      price: 9.99,
      quantity: 100
    },
    {
      name: '',
      category: categories[4]._id,
      description: '',
      image: '',
      price: 1.99,
      quantity: 1000
    },
    {
      name: '',
      category: categories[4]._id,
      description:
        '',
      image: '',
      price: 2.99,
      quantity: 1000
    },
    {
      name: '',
      category: categories[4]._id,
      description:
        '',
      image: '',
      price: 7.99,
      quantity: 100
    },
    {
      name: '',
      category: categories[4]._id,
      description:
        '',
      image: '',
      price: 9.99,
      quantity: 600
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: '',
    lastName: '',
    email: '',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: '',
    lastName: '',
    email: '',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
