import React from "react";
import './CheckoutProduct.css'
import { useStateValue } from "../../StateProvider";
import reducer from "../../reducer";

function CheckoutProduct({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue()

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id
    })
  }

  return (
    <div className="checkoutProduct" key={`checkoutProduct-${id}`}>
      <img src={ image } alt={ title } className="checkoutProduct__image" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">
          { title }
        </p>

        <p className="checkoutProduct__price">
        <small>$</small><strong>{ price }</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(rating)
              .fill()
              .map((_, i) => (
                  <p key={i}>★</p>
              ))}
        </div>

        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct