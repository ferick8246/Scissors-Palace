// imports
const express = require('express');
const path = require('path');

const db = require('./config/connection');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
const app = express();
const PORT = process.env.PORT || 3005
const server = new ApolloServer({
    typeDefs,
    resolvers
});


// middleware
server.applyMiddleware({ app });
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '..', 'react-ui', 'build')));
    console.log('mode is production wueyy');
}

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'react-ui', 'build', 'index.html'));
})

// message that the port is up and running
db.once('open', () => { 

    app.listen(PORT, () => {
        
        console.log(`You are now up and running on port: ${PORT}!`);
        console.log(`GraphQL can be accessed from http://localhost:${PORT}${server.graphqlPath}`);
    }) 
})

