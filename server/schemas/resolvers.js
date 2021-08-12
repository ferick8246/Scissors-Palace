const { AuthenticationError, UserInputError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User, Product, Category, Cart} = require('../models')
const stripe = require('stripe')('sk_test_51JJpIQDB4Au8TmvcC3rYqkqc6ASA1IUOw9BhGGswUuEpZWXQ3AnVlf7QYyyPIp0WlLcfl6PKG05ttFNBlnfYjbPj00sc7JRLfZ')

const resolvers = {


    Query: {

        categories: async () => {
            return await Category.find()
        },


        products: async (parent, { category, name }) => {
            const params = {}

            if (category) {
                params.category = category
            }

            if (name) {
                params.name = {
                    $regex: name
                }
            }
            return await Product.find(params).populate(category)
        },
        

        product: async (parent, { _id }) => {
            return await Product.findById(_id).populate('category')
        },


        user: async (parent, args, context) => {
            if (context.user) {
                const user = await UserInputError.findById(context.user._id).populate({
                    path: 'carts.products',
                    populate: 'category'
                })

                user.carts.sort((a, b) => b.purchaseDate - a.purchaseDate)
                return user
            }
            throw new AuthenticationError(`Hey, you're not logged in! FROM USER`)
        },


        cart: async (parent, {_id }, context) => {
            if(context.user) {
                const user = await User.findById(context.user._id).populate({
                    path: 'carts.products',
                    populate: 'category'
                })

                return user.carts.id(_id)
            }

            throw new AuthenticationError(`Hey, you're not logged in! FROM CART`)
        },


        checkout: async (parent, args, context) => {
            const url = new URL('https://scissors-palace.herokuapp.com')
            const line_items = []
            const products = await Product.find({_id:{$in:args.products}})
            
            for (let i = 0; i < products.length; i++) {
              const product = await stripe.products.create({
                name: products[i].name,
                description: products[i].description,
                images: [`${url}/images/${products[i].image}`]
              });
      
              const price = await stripe.prices.create({
                product: product.id,
                unit_amount: products[i].price * 100,
                currency: 'usd',
              });
      
              line_items.push({
                price: price.id,
                quantity: 1
              });
            }
      
            const session = await stripe.checkout.sessions.create({
              payment_method_types: ['card'],
              line_items,
              mode: 'payment',
              success_url: [`${url}`, 'success'].join(''),
              cancel_url: `${url}/`
            });
      
            return { session: session.id };
        }
    },



    Mutation: {

        addUser: async (parent, args) => {
            const user = await User.create(args)
            const token = signToken(user)

            return { token, user }
        },


        addToCart: async (parent, { products }, context) => {

            if (context.user) {
                const cart = new Cart({ products })

                await User.findByIdAndUpdate(context.user._id, { $push: { carts: cart } })
                return cart
            }
            throw new AuthenticationError(`Hey, you're not logged in! FROM ADD TO CART`)
        },


        updateUser: async(parent, args, context) => {
           
            if (context.user) {
                return await User.findByIdAndUpdate(context.user._id, args, { new: true })
            }
            throw new AuthenticationError(`Hey, you're not logged in! FROM UPDATEUSER`)
        },


        updateProduct: async(parent, { _id, quantity }) => {
            
            const decrement = Math.abs(quantity) * -1
            return await Product.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true })

        },


        login: async(parent, { email, password }) => {
            
            const user = await User.findOne({ email })

            if (!user) {
                throw new AuthenticationError(`This combination of username and password does not exist`)    
            }

            const correctPassword = await user.isCorrectPassword(password)

            if (!correctPassword) {
                throw new AuthenticationError(`This combination of username and password does not exist`)
            }

            const token = signToken(user)
            return { token, user }
        }
    }
}

module.exports = resolvers;