import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('stripe key here');

function Cart() {
    return (
      null
    );
  }
  
  export default Cart;