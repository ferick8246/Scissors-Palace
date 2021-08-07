const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'cuts' },
    { name: 'shampoos' },
    { name: 'razer' },
    { name: 'clippers' },
    { name: 'dryers' }
  ]);

  console.log('seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Taperfade',
      description:
        'A fade that tapers',
      image: 'haircut-1.jpg',
      category: categories[0]._id,
      price: 2.99,
      quantity: 500
    },
    {
      name: 'The Weeknd',
      description:
        `Can't feel my face`,
      image: 'haircut-7.jpg',
      category: categories[0]._id,
      price: 2.99,
      quantity: 500
    },
    {
      name: 'The Kravitz',
      description:
        'Are you gonna go my way',
      image: 'haircut-6.jpg',
      category: categories[0]._id,
      price: 2.99,
      quantity: 500
    },
    {
      name: 'The Karen',
      description:
        'My I speak to your manager',
      image: 'haircut-5.jpg',
      category: categories[0]._id,
      price: 2.99,
      quantity: 500
    },
    {
      name: 'The Rachelle',
      description:
        `I'll be there for you`,
      image: 'haircut-4.jpg',
      category: categories[0]._id,
      price: 2.99,
      quantity: 500
    },
    {
      name: 'The Mow',
      description:
        `Big and tall`,
      image: 'haircut-3.jpg',
      category: categories[0]._id,
      price: 2.99,
      quantity: 500
    },
    {
      name: 'The Buns',
      description:
        `Unless you got buns`,
      image: 'haircut-2.jpg',
      category: categories[0]._id,
      price: 2.99,
      quantity: 500
    },
    {
      name: 'The Regular',
      description:
        `That's it?`,
      image: 'haircut-1.jpg',
      category: categories[0]._id,
      price: 2.99,
      quantity: 500
    },
    {
      name: 'Dryer',
      description:
        `Imported all the way from Dubai the dryer 9000`,
      image: 'hair-dryer.jpg',
      category: categories[0]._id,
      price: 1000.00,
      quantity: 500
    },
    {
      name: 'Hair Dye',
      description:
        `Exclusive dye all the way from France`,
      image: './images/Square/hair-color.jpg',
      category: categories[0]._id,
      price: 500.00,
      quantity: 500
    },
    {
      name: 'The Clippers',
      description:
        `All the way from LA, Exclusively signed by Kawhi Leonard`,
      image: 'clippers.jpg',
      category: categories[0]._id,
      price: 5000.00,
      quantity: 5
    },
    {
      name: 'The Razer',
      description:
        `NO not the phone! Stop asking!`,
      image: 'straight-razor.jpg',
      category: categories[0]._id,
      price: 5000.00,
      quantity: 5
    },
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'bob',
    lastName: 'villa',
    email: 'treesarecool@gmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id]
      }
    ]
  });

  await User.create({
    firstName: 'bob',
    lastName: 'villa',
    email: 'test@test.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
