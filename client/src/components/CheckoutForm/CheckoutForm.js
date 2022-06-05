import React from 'react'
import Input from '../Input/input'
import './CheckoutForm.scss'
import Zoom from 'react-reveal/Zoom';
import { words } from '../../words';
 function CheckoutForm(props) {
  return (
    <>
    
       {props.showForm && <div className='checkout-form'>
            <span className='close-icon' onClick={()=> props.setShowForm(false)}> &times;</span>
            <Zoom left>
            <form onSubmit={props.submitOrder}>
              <Input
               label={words.name}
               type="text"
               onChange={props.handleChange}
               name="name"
              />
              <Input
               label={words.email}
               type="email"
               onChange={props.handleChange}
               name="email"
              />
              <div>
                <button  type="submit"> {words.checkout}</button>
              </div>
            </form>
            </Zoom>
          </div>}
    </>
  )
}

export default CheckoutForm