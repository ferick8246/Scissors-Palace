import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Cart from '../components/layout/Cart';
import Spinner from '../components/layout/Spinner';
import { useStoreContext } from '../utils/GlobalState';
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from '../utils/actions';
import { QUERY_PRODUCTS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';



function Detail() {

  const [state, dispatch] = useStoreContext();
  const { id } = useParams();
  const [currentProduct, setCurrentProduct] = useState({});
  const { loading, data } = useQuery(QUERY_PRODUCTS);
  const { products, cart } = state;

  useEffect(() => {

    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    }
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      })
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    }
    else if (!loading) {
      idbPromise('products', 'get').then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts,
        })
      })
    }
  }, [products, data, loading, dispatch, id]);



  const addToCart = () => {

    const itemInCart = cart.find((cartItem) => cartItem._id === id)

    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      })
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      })
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 },
      })
      idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
    }
  }



  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id,
    })
    idbPromise('cart', 'delete', { ...currentProduct });
  }


if (currentProduct.quantity === 1) {
  var trueQuantity = 'Book an Appointment'
}else {
  var trueQuantity = `Quantity Available: ${currentProduct.quantity}`
}

  return (
    <>
      {currentProduct && cart ? (
        <div className="container">
          <section className="text-gray-700 body-font overflow-hidden bg-white">
            <div className="container px-5 py-24 mx-auto">
              <Link to="/shop">← Products</Link> <br/>
              <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={`/images/${currentProduct.image}`} alt={currentProduct.name} />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h2 className="text-sm title-font text-gray-500 tracking-widest">{trueQuantity}</h2>
                  <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{currentProduct.name}</h1>
                  <p className="leading-relaxed">{currentProduct.description}</p>

                    <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                      <div className="flex ml-6 items-center">
                        <div className="relative">
                          <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24"/>
                          </span>
                        </div>
                      </div>
                    </div>
                  <div className="flex">
                    <span className="title-font font-medium text-2xl text-gray-900">${currentProduct.price}</span>
                    <button className="flex ml-auto text-xs md:text-base text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded" onClick={addToCart}>Add To Cart</button>
                    <button className="flex ml-auto text-xs md:text-base text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded" disabled={!cart.find((p) => p._id === currentProduct._id)} onClick={removeFromCart}>Remove From Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : null}
      {loading ? <Spinner /> : null}
      <Cart />
    </>
  );
}

export default Detail;
