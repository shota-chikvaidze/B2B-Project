import React from 'react';
import './cart.css';

import { PiShoppingCartSimpleLight } from "react-icons/pi";


export const Cart = ({ products }) => {
  
  const allItems = Object.values(products).flat();
  const cartItems = allItems.filter(item => item.inCart);

  const totalItems = cartItems.length;
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);


  return (
    <>
    
      {totalItems === 0 ? (
        <div className='empty_cart_container'>
          <h2>Your cart is Empty</h2>
          <div className='empty_cart'>
            <PiShoppingCartSimpleLight className='empty_cart_icon'/>
            <div className='empty_cart_text'>
              <h1>0</h1>
            </div>
          </div>
        </div>
      ) : (
        <section className='cart_section'>
          <div className='cart_items'>
            {cartItems.map((item) => (
              <>
                <div key={item.id} className='cart_item'>
                  <div>
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className='cart_item_details'>
                    <h3>{item.name}</h3>
                    <p>${item.price}</p>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className='cart_summary'>
            <div>
              <button className='checkout_button'>Continue to Checkout</button>
            </div>
            <div className='cart_summary_details'>
              <p>Discount: <span>0</span></p>
              <p>Total Price:  <span>${totalPrice.toFixed(2)}</span>   </p>
            </div>
          </div>
        </section>
      )}
    </>

  );
};
