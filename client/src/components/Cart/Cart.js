import React, { useState } from "react";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import "./Cart.scss";
import Bounce from "react-reveal/Bounce";
import { connect } from "react-redux";
import { removeCart } from "../../store/actions/cart";
import OrderModal from "./OrderModal";
import {createOrder, clearOrder} from '../../store/actions/orders'
import { words } from "../../words";
function Cart(props) {
  const [showForm, setShowForm] = useState(false);
  const [value, setValue] = useState("")

  const submitOrder = (e) => {
      e.preventDefault();
      const order = {
          name : value.name,
          email: value.email
      }
      props.createOrder(order);
  }

  const closeModal = () => {
      props.clearOrder();
      setShowForm(false)
  }

  const handleChange = (e) => {
      setValue( (prevState) => ({ ...prevState, [e.target.name]: e.target.value}) )
  }
  return (
      <div className="cart-wrapper">
          <div className="cart-title"> {props.cartItems.length === 0 ? 'Cart Empty' : <p>
               {words.cartHeader} {props.cartItems.length} 
              </p>} </div>
          {/* Modal */}
          <OrderModal cartItems={props.cartItems} order={props.order} closeModal={closeModal} />
          <Bounce bottom cascade>
              <div className="cart-items">
                  {props.cartItems.map(item => (
                      <div className="cart-item" key={item.id}>
                          <img src={item.imageUrl} alt=""/>
                          <div className="cart-info">
                              <div>
                                  <p>{words.cartTitle}: {item.title} </p>
                                  <p>{words.cartQty}: {item.qty}  </p>
                                  <p>{words.cartPrice}: ${item.price} </p>
                              </div>
                              <button onClick={() => props.removeCart(item)}>
                              {words.cartRemove}
                              </button>
                          </div>
                      </div>
                  ))}
              </div>
          </Bounce>
          {
              props.cartItems.length !== 0 && 
              (
                  <div className="cart-footer">
                      <div className="total">{words.total} : ${props.cartItems.reduce( (acc, p) => {
                          return acc + p.price
                      }  , 0)} </div>
                      <button onClick={() => setShowForm(true)}> {words.selectProducts} </button>
                  </div>
              )
          }
          {/* Checkout Form  */}
          <CheckoutForm 
              showForm={showForm}
              submitOrder={submitOrder} 
              setShowForm={setShowForm} 
              handleChange={handleChange}
          />
      </div>
  )
}

export default connect(
  (state) => {
    return {
      order: state.order.order,
      cartItems: state.cart.cartItems,
    };
  },
  { removeCart, createOrder, clearOrder }
)(Cart);