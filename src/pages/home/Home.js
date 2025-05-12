import React from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';

import sliderData from '../../data/sliderData/SliderData';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <section className='first_section'>
      {sliderData.map((product, index) => (
        <div
          className='product_div'
          key={index}
          onClick={() => navigate(`/category/${product.name.toLowerCase()}`)}
          style={{ cursor: 'pointer' }}
        >
          <div>{product.name}</div>
          <div className='image_card'>
            <img src={product.image} alt={product.name} />
          </div>
        </div>
      ))}
    </section>
  );
};
