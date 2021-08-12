import React, { useEffect } from "react"
import MetaData from "./layout/MetaData";
import { useStoreContext  } from "../utils/GlobalState";
import Product from './Product';
import Spinner from '../components/layout/Spinner';
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
      })
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      })
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
    )
  }


    return(
        <div className="">
        <MetaData title={'Shop'}/>
          <h2 className="text-center">Our Products:</h2>
            <div className="container mx-auto justify-items-center">
            {state.products.length ? (
              <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
              <h3>You haven't added any products yet! Did you remember to seed?</h3>
              )}
            </div>
            {loading ? <Spinner /> : null}
        </div>
    )
}

export default Shop;
