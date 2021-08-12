import React from "react";
import { Link } from 'react-router-dom'
import { useStoreContext } from '../utils/GlobalState'
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../utils/actions'
import { idbPromise } from '../utils/helpers'
import { pluralize } from '../utils/helpers'


function Product(item) {
    const [state, dispatch] = useStoreContext()

    const {
        image,
        name,
        description,
        _id,
        price,
        quantity
    }   = item

    const { cart } = state

    const addToCart = () => {
        const itemInCart = cart.find((cartItem) => cartItem._id === _id)
        if (itemInCart) {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: _id,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
            })

            idbPromise('cart', 'put', {
                ...itemInCart,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
            })
        }   else {
            dispatch({
                type: ADD_TO_CART,
                product: { ...item, purchaseQuantity: 1 }
            })
            idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 })
        }
    }

    return (
        <div className='container mx-2 my-2 p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300'>
            <Link to={`/products/${ _id }`}><img className='rounded-xl' src={ `/images/${image}` } alt={ name }/></Link>
                <div>
                    <div className="flex justify-center text-center">
                        <div>
                            <div className="mt-5 text-2xl font-semibold">{ name }</div>
                            <div className="text-s">${price}</div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className="text-white text-md font-semibold bg-yellow-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110" onClick={addToCart}>Add to Cart</button>
                </div>
        </div>
    )

}

export default Product;
