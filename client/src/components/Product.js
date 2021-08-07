import React from "react";
import { useStoreContext } from '../utils/GlobalState'

function Product() {
    const [state, dispatch] = useStoreContext()

    const {
        image,
        name,
        _id,
        price,
        quantity
    }   = item;

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
        <div className='card px-1 py-1'>
            <Link to={`/products/${ _id }`}>
                <img src={ `/images/${image}` } alt={ name }/>
                <p>{ name }</p>
            </Link>
            <div>
                <div>{ quantity } { pluralize('item', quantity) } in stock</div>
            </div>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )

}

export default Product;
