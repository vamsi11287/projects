import React from 'react'
import { Vamsi } from '../../Components/context/cartContext'
import './Cart.css'

const Cart = () => {
  const {cart} = Vamsi([]);

  return (
    <div>
      
      <span style={{fontSize:'30px'}}>My Cart</span><br/>
      <span style={{fontSize:'20px'}}>Total:Rs.0</span>
      
      <div className='card'>
      {
        cart.map((item, index) => (
        
          <div key={index} className="cards">
            <h3>{item.title}</h3>
            <img src={item.image} alt='' />
            <div className='card_price-rate'>
              <h5>Price:{item.price}₹</h5>
              <h5>Rating:{item.rating.rate}</h5>
            </div>
             

          </div>

        ))
      }


    </div>
    </div>
  )
}

export default Cart