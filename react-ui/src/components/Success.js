import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ORDER } from '../utils/mutations';
import { idbPromise } from '../utils/helpers';

function Success() {
  const [addToCart] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise('cart', 'get');
      const products = cart.map((item) => item._id);

      // if (products.length) {
      //   const { data } = await addToCart({ variables: { products } });
      //   const productData = data.addToCart.products;

      //   productData.forEach((item) => {
      //     idbPromise('cart', 'delete', item);
      //   });
      // }

      setTimeout(() => {
        window.location.assign('/');
      }, 6000);
    }

    saveOrder();
  }, [addToCart]);

  return (
    <div class="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-md text-green-100 bg-green-700 border border-green-700 ">
            <div slot="avatar">
                <svg xmlns="http://www.w3.org/2000/svg" width="200%" height="200%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle w-5 h-5 mx-2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
            </div>
    <div className="font-normal  max-w-full flex-initial">
        <h1 className="text-5xl">Success!</h1>
        <h2 className="text-xl">Thank you for your purchase!</h2>
        <h2 className="text-l font-base">You will now be redirected to the home page</h2>
    </div>
    </div>
  );
}

export default Success;
