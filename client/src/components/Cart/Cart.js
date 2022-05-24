import React, { useState } from 'react'
import CheckoutForm from '../CheckoutForm/CheckoutForm'
import './Cart.scss'
import Bounce from 'react-reveal/Bounce';
function Cart(props) {

  const [showForm, setShowForm] = useState(false)
  const [value ,setValue] =useState('')
  const submitOrder =(e) =>{
    e.preventDefault()
     const order ={
       name: value.name,
       email: value.email
     }
     console.log(order)
  }

  const handleChange =(e) => {
    console.log(e.target.name)
    setValue((prevState) => ({...prevState, [e.target.name]: e.target.value}))
  }

  return (
    
    <div className='cart-wrapper'>
        <div className='cart-title'>
            {props.cartItems.length === 0 ? 'Cart Empty' : <p>there is {props.cartItems.length} product in cart</p>}
        </div>
        <Bounce bottom cascade>

        <div className='cart-items'>
          {props.cartItems.map(item =>(
            <div className='cart-item' key={item.id}> 
            <img src={item.imageUrl} alt=""/>
            <div className='cart-info'>
              <div>
                <p>title: {item.title}</p>
                <p>qty: {item.qty}</p>
                <p>price: ${item.price}</p>
              </div>
              <button onClick={() => props.removeFromCart(item)}>
                Remove
              </button>
            </div>
          </div>  
          ))}
        </div>
        </Bounce>
        { 
          props.cartItems.length !== 0 &&
          (
            <div className='cart-footer'>
          <div className='total'>total: ${props.cartItems.reduce((acc,p ) => {
              return acc + p.price
          }, 0 )}</div>
          <button onClick={() => setShowForm(true)}> select products</button>
        </div>
          )
        }
        
        {/* checkout form */}
        <CheckoutForm 
        showForm={showForm} 
        setShowForm={setShowForm} 
        submitOrder={submitOrder} 
        handleChange={handleChange}
        />
        
        
        
       
    </div>
  )
}

export default Cart
