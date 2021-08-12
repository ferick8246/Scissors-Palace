import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';

// Apollo
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

// component imports:
import Header from './components/layout/Header';
import Home from './components/Home';
import Cart from './components/layout/Cart'
import NavBar from './components/layout/NavBar';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import OrderHistory from './components/OrderHistory';
import Success from './components/Success';
import Shop from './components/Shop';
import Footer from './components/layout/Footer';
import Services from './components/Services';
import Product from './components/Product';
import Detail from './components/Detail';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import Calendar from './components/Calendar';
import { StoreProvider } from './utils/GlobalState';


// Middleware
// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
        <Router>
          <div>
            <StoreProvider>
              <NavBar />
              <Header />
              <Cart />
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={AboutUs} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/shop" component={Shop}/>
              <Route exact path="/profile" component={OrderHistory} />
              <Route exact path="/success" component={Success} />
              <Route exact path="/products" component={Product}/>
              <Route exact path="/products/:id" component={Detail} />
              <Route exact path="/services" component={Services} />
              <Route exact path="/reviews" component={Reviews} />
              <Route exact path="/gallery" component={Gallery} />
              <Route exact path="/calendar/:service" component={Calendar} />
              <Route exact path="/cart" component={Cart} />
              <Footer />
            </StoreProvider>
          </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
