import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "../calendar.css";
import { Link } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../utils/actions";
import { idbPromise } from "../utils/helpers";

function ReactCalendar() {
  const [date, setDate] = useState(new Date());
  const [dateString, setDateString] = useState();
  const [path, setPath] = useState(window.location.pathname);
  const [service, setService] = useState({});

  useEffect(() => {
    switch (path) {
      case "/calendar/womensshampoo":
        setService({ name: "Women's Shampoo", cost: "$65" });
        break;
      case "/calendar/womenshaircut":
        setService({ name: "Women's Haircut", cost: "$65" });
        break;
      case "/calendar/partialhighlight":
        setService({ name: "Partial Highlight", cost: "$65" });
        break;
      case "/calendar/fullhighlight":
        setService({ name: "Full Highlight", cost: "$65" });
        break;
      case "/calendar/bridalstyle":
        setService({ name: "Bridal Style", cost: "$65" });
        break;
      case "/calendar/fullbridalservice":
        setService({ name: "Full Bridal Service", cost: "$65" });
        break;
      case "/calendar/afrohairstyling":
        setService({ name: "Afro Hair Styling", cost: "$65" });
        break;
      case "/calendar/locstyling":
        setService({ name: "Loc Styling", cost: "$65" });
        break;
      case "/calendar/mensshampoo":
        setService({ name: "Men's Shampoo", cost: "$65" });
        break;
      case "/calendar/mensfade":
        setService({ name: "Men's Fade", cost: "$65" });
        break;
      case "/calendar/braidingservices":
        setService({ name: "Braiding Services", cost: "$65" });
        break;
      case "/calendar/champagne":
        setService({ name: "Champagne", cost: "$65" });
        break;
    }
  }, [path]);

  useEffect(() => {
    setDateString(date.toString().slice(0, 10));
  }, [date]);

  const onChange = (date) => {
    setDate(date);
  };

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
    //this is the header
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Schedule Service Online
        </h1>
      </div>
      {/* this is the body container */}
      <div class="bodyContainer2">
        {/* this is the calendar */}
        <Calendar formatYear onChange={onChange} value={date} />
        {/* this is the smaller, second div */}
        <div class="checkoutContainer">
          <h1 id="serviceName">{service.name}</h1>
          <br></br>
          <br></br>
          <h2>
            {dateString} | {service.cost}
          </h2>


          {/* <div className="flex justify-center">
            <button
              className="text-white text-md font-semibold bg-yellow-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110"
              onClick={addToCart}
            >
              Add to Cart
            </button>
          </div> */}


          <a
            // href="/cart"
            id="checkoutArrow"
            class="mt-3 text-yellow-500 inline-flex items-center"
          >
            Checkout
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              onClick={addToCart}
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ReactCalendar;
