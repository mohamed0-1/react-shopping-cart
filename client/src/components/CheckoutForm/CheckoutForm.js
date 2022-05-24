import React from 'react'
import Input from '../Input/input'
import './CheckoutForm.scss'
 function CheckoutForm(props) {
  return (
    <>
       {props.showForm && <div className='checkout-form'>
            <span className='close-icon' onClick={()=> props.setShowForm(false)}> &times;</span>
            <form onSubmit={props.submitOrder}>
              <Input
               label="Name"
               type="text"
               onChange={props.handleChange}
               name="name"
              />
              <Input
               label="Email"
               type="email"
               onChange={props.handleChange}
               name="email"
              />
              <div>
                <button  type="submit"> checkout</button>
              </div>
            </form>
          </div>}
    </>
  )
}

export default CheckoutForm