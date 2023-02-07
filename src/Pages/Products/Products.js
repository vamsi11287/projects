import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Vamsi } from '../../Components/context/cartContext';
import Cart from '../Cart/Cart';
import './Products.css'

const Products = () => {
  const [user, setUser] = useState([]);

 


    const shoot = () => {
      alert("order placed!");
    }


 


  const {alldata} = Vamsi();


  const fetchData = async() => {
    const response = await fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      setUser(await response);
  }
  useEffect(() => {
    fetchData();
  }, [])
  return (

    <div className='card'>
      {
        user.map((item, index) => (
        
          <div key={index} className="cards">
            <h3>{item.title}</h3>
            <img src={item.image} alt=''/>
            <div className='card_price-rate'>
              <h5>Price:{item.price}₹</h5>
              <h5>Rating:{item.rating.rate}</h5>
            </div>
            <div className='card_buttons'>
              <button className='buy' onClick={shoot}>Buy Now</button>
             
              <button className='add' onClick={()=> alldata([item])}>Add to Cart</button>
            </div>

          </div>

        ))
      }


    </div>

  )
}

export default Products