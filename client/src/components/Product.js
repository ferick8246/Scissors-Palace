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
        <div className='flex flex-row justify-start'>
            <div className='w-80 my-8'>
                <Link to={`/products/${ _id }`}>
                    <img className='' src={ `/images/${image}` } alt={ name }/>
                    <p>{ name }</p>
                    <p>{ description }</p>
                </Link>
                <div>
                    <div>{ quantity } { pluralize('item', quantity) } in stock</div>
                    <span>${price}</span>
                </div>
                <button onClick={addToCart}>Add to Cart</button>
            </div>
        </div>
    )

}

export default Product;
