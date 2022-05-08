import React from "react";
import './Product.css'
import { useStateValue } from '../../StateProvider';
import reducer from "../../reducer";

function Product({ id, title, price, rating, image }) {
  const [state, dispatch] = useStateValue()

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      }
    })
  }

  return (
    <div className="product" key={`product-${id}`}>
      <div className="product__info">
        <p className="product__title">{ title }</p>
        <p className="product__price"><small>$</small><strong>{ price }</strong></p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
                <p key={i}>★</p>
            ))}
        </div>
      </div>

      <img src={ image } alt={`product-${id}`} />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product