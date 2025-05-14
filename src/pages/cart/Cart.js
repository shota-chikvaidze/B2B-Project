import React from 'react';

export const Cart = ({ products }) => {
  
  const allItems = Object.values(products).flat();
  const cartItems = allItems.filter(item => item.inCart);

  const totalItems = cartItems.length;
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <section className='cart_section'>
      <div className='cart_items'>
        {cartItems.map((item) => (
          <div key={item.id} className='cart_item'>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
      <div className='cart_summary'>
        <h2>Cart Summary</h2>
        <p>Total Items: {totalItems}</p>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
      </div>
    </section>
  );
};
