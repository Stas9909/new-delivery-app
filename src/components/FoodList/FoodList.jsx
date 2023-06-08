import React from "react";
import './FoodList.css'
import { useDispatch, useSelector } from "react-redux";

const FoodList = (props) => {
  const { data, currentShop } = props;

  const dispatch = useDispatch();
  const cartData = useSelector(state => state.cart);

  const addToCart = (item) => {
    const itemExists = cartData.find((cart) => cart.id === item.id);
    if (!itemExists) {
      dispatch({
        type: 'SET_CART_ITEM',
        payload: { ...item, quantity: 1 }
      });
    }
  };

  return (
    <>
      {
        data.map(item => (
          <li className="cartContainer" key={item.id}>
            <div className="imageContainer">
              <img className="image" src={item.image} alt={data.name} />
              <h2 className="dishName">{item.name}</h2>
              <p className="dishDescription">{item.description}</p>
            </div>
            <div className="lowerContainer">
              <p className="dishPrice">{item.price} грн.</p>
              <button onClick={() => addToCart(item)}
                className="addToCart"
              disabled = { currentShop !== null && item.restaurant !== currentShop }
              >
                Add to cart
              </button>
            </div>
          </li>
        ))
      }
    </>
  )
}

export default FoodList