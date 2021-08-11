const { gql } = require('apollo-server-express');

const typeDefs = gql `
type Category {
    _id: ID
    name: String
}

type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
}

type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    carts: [Cart]
}

type Cart {
    _id: ID
    purchaseDate: String
    products: [Product]
}

type Auth {
    token: ID
    user: User
  }

  type Checkout {
    session: ID
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    cart(_id: ID!): Cart
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addToCart(products: [ID]!): Cart
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;


module.exports = typeDefs;