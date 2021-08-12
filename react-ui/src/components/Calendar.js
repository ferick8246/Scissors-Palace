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
        setService({
          name: "Women's Shampoo",
          _id: "Women's Shampoo",
          price: 65,
          image: "womanShampoo.jpg",
        });
        break;
      case "/calendar/womenshaircut":
        setService({
          name: "Women's Haircut",
          _id: "Women's Haircut",
          price: 65,
          image: "haircut-4.jpg",
        });
        break;
      case "/calendar/partialhighlight":
        setService({
          name: "Partial Highlight",
          _id: "Partial Highlight",
          price: 65,
          image: "partHighlight.jpg",
        });
        break;
      case "/calendar/fullhighlight":
        setService({
          name: "Full Highlight",
          __id: "Full Highlight",
          price: 65,
          image: "fullHighlight.jpg",
        });
        break;
      case "/calendar/bridalstyle":
        setService({
          name: "Bridal Style",
          _id: "Bridal Style",
          price: 65,
          image: "bridal.jpg",
        });
        break;
      case "/calendar/fullbridalservice":
        setService({
          name: "Full Bridal Service",
          _id: "Full Bridal Service",
          price: 65,
          image: "bridalNatural.jpg",
        });
        break;
      case "/calendar/afrohairstyling":
        setService({
          name: "Afro Hair Styling",
          _id: "Afro Hair Styling",
          price: 65,
          image: "naturalStyle.jpg",
        });
        break;
      case "/calendar/locstyling":
        setService({
          name: "Loc Styling",
          _id: "Loc Styling",
          price: 65,
          image: "haircut-7.jpg",
        });
        break;
      case "/calendar/mensshampoo":
        setService({
          name: "Men's Shampoo",
          _id: "Men's Shampoo",
          price: 65,
          image: "menShampoo.jpg",
        });
        break;
      case "/calendar/mensfade":
        setService({
          name: "Men's Fade",
          _id: "Men's Fade",
          price: 65,
          image: "haircut-2.jpg",
        });
        break;
      case "/calendar/braidingservices":
        setService({
          name: "Braiding Services",
          _id: "Braiding Services",
          price: 65,
          image: "kawhi.png",
        });
        break;
      case "/calendar/champagne":
        setService({
          name: "Champagne",
          _id: "Champagne",
          price: 65,
          image: "champagne.jpg",
        });
        break;
    }
  }, [path]);

  useEffect(() => {
    setDateString(date.toString().slice(0, 10));
  }, [date]);

  const onChange = (date) => {
    setDate(date);
  };

  //Thus begins our checkout arrow
  const [state, dispatch] = useStoreContext();

  const { image, name, _id, price } = service;

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });

      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...service, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...service, purchaseQuantity: 1 });
    }
  };

  return (
    //this is the header
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Schedule Service Online
        </h1>
      </div>
      {/* this is the body container */}
      <div className="bodyContainer2">
        {/* this is the calendar */}
        <Calendar formatYear onChange={onChange} value={date} />
        {/* this is the smaller, second div */}
        <div className="checkoutContainer">
          <h1 id="serviceName">{service.name}</h1>
          <br></br>
          <br></br>
          <h2>
            {dateString} | {service.price}
          </h2>
          <a
            // href="/cart"
            id="checkoutArrow"
            className="mt-3 text-yellow-500 inline-flex items-center"
            onClick={addToCart}
          >
            Checkout
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
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
