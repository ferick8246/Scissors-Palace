import React, { useEffect } from "react"

import MetaData from "./layout/MetaData";
// import Product from '.Product';

import { useStoreContext  } from "../utils/GlobalState";
import Product from './Product';
import {UPDATE_PRODUCTS} from '../utils/actions'
import { useQuery } from '@apollo/client'
import { QUERY_PRODUCTS } from '../utils/queries'
import { idbPromise } from '../utils/helpers'


function Shop() {

    const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }

    return(
        <div className="my-2">
        <MetaData title={'Shop'}/>
      <h2>Our Products:</h2>
      {state.products.length ? (
        <div className="flex-row">
          {filterProducts().map((product) => (
            <Product
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              description={product.description}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      {loading ? <img src='' alt="loading" /> : null}
    </div>
    )
}

export default Shop;
