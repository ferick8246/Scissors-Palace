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
        'Start lookin fresh with a fade that tapers',
      image: 'haircut-1.jpg',
      category: categories[0]._id,
      price: 90.00,
      quantity: 1
    },
    {
      name: 'The Weeknd',
      description:
        `oh, oh, ooh!
        I can't feel my face when I'm with you, but I love it, 
        but I love it, oh`,
      image: 'haircut-7.jpg',
      category: categories[0]._id,
      price: 150.00,
      quantity: 1
    },
    {
      name: 'The Kravitz',
      description:
        `But what I really want to know is
        Are you gonna go my way?
        And I got to, got to know`,
      image: 'haircut-6.jpg',
      category: categories[0]._id,
      price: 100.00,
      quantity: 1
    },
    {
      name: 'The Karen',
      description:
        `I don't like your tone, do you know who I am?... May I speak to your manager?`,
      image: 'haircut-5.jpg',
      category: categories[0]._id,
      price: .99,
      quantity: 1
    },
    {
      name: 'The Rachelle',
      description:
        `PIVOT!... And just to let you know... we were on a break!`,
      image: 'haircut-4.jpg',
      category: categories[0]._id,
      price: 150.00,
      quantity: 1
    },
    {
      name: 'Mr-T',
      description:
        `I pitty the fool who don't rock the mowhawk!`,
      image: 'Mr-T.jpg',
      category: categories[0]._id,
      price: 250.00,
      quantity: 1
    },
    {
      name: 'The Buns',
      description:
        `Unless you got buns`,
      image: 'haircut-2.jpg',
      category: categories[0]._id,
      price: 50.00,
      quantity: 1
    },
    {
      name: 'The Kawhi Leonard',
      description:
        `I'm a fun guy. There's just more questions that you need to be asking me.`,
      image: 'kawhi-leonard.jpg',
      category: categories[0]._id,
      price: 125.00,
      quantity: 1
    },
    {
      name: 'Dryer',
      description:
        `Imported all the way from Dubai the dryer 9000`,
      image: 'hair-dryer.jpg',
      category: categories[0]._id,
      price: 1000.00,
      quantity: 50
    },
    {
      name: 'Hair Dye',
      description:
        `Exclusive dye all the way from France`,
      image: 'hair-color.jpg',
      category: categories[0]._id,
      price: 250.00,
      quantity: 100
    },
    {
      name: 'The Clippers',
      description:
        `All the way from LA, Exclusively signed by Kawhi Leonard`,
      image: 'clippers.jpg',
      category: categories[0]._id,
      price: 5000.00,
      quantity: 4
    },
    {
      name: 'The Razer',
      description:
        `NO not the phone! Stop asking!`,
      image: 'straight-razor.jpg',
      category: categories[0]._id,
      price: 89.00,
      quantity: 48
    },
    {
      name: 'Shampoo',
      description:
        `All the way from Dubai. Made from pure gold.`,
      image: 'shampoo.jpg',
      category: categories[0]._id,
      price: 1000.00,
      quantity: 53
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
