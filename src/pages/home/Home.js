import  React, { useState }  from 'react';
import './home.css';
import { useNavigate, Link } from 'react-router-dom';

import Footer from '../../layout/Footer';
import sliderData from '../../data/sliderData/SliderData';
import brandsData from '../../data/brandsData/BrandsData';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { IoAddOutline } from "react-icons/io5";

export const Home = ({ products, setProducts }) => {
  const navigate = useNavigate();

    const totalProducts = 8;
    const productPerView = 5;
    
    const maxIndex = totalProducts - productPerView ;

    const [currentProduct, setCurrentProduct] = useState(0);

    const nextProduct =() => {
        if(currentProduct < maxIndex){
            setCurrentProduct( (prevIndex) => prevIndex+1 )
        }
    }

    const prevProduct =() => {
        if(currentProduct > 0){
            setCurrentProduct( (prevIndex) => prevIndex-1 )
        }
    }
  
    const addToCart = (id) => {
      setProducts(prev =>
        prev.map(item =>
          item.id === id ? { ...item, inCart: true } : item
        )
      );
    };

  return (

    <>


      <section className="slider_container">

        <div className="slider_wrapper">
          <div className='slider_header'>
            <h1>Best seller Phones</h1>
            <Link to='/createProduct'>
              <button>Create Product</button>
            </Link>
          </div>
          <button onClick={prevProduct} disabled={currentProduct === 0} className='prev_btn'>
            <FaArrowLeft />
          </button>
          <div className="slider_track">
            <div className="slider_view" style={{ transform: `translateX( -${currentProduct * 270}px )` }}>
                {sliderData.map((product) => (
                  <div className='product_div' key={product.id} style={{ cursor: 'pointer' }} >
                    <div className='image_card'>
                      <img src={product.image} alt={product.name} />
                      <button className='add_productHome' onClick={() => addToCart(product.id)}>
                          <IoAddOutline />
                      </button>
                    </div>
                    <div className='product_description'>
                      <h1>{product.brand}</h1>
                      <p>{product.name}</p>
                      <div className='product__details'>
                        <h3>{product.price}$</h3>
                        <Link to={`/bestSellerPhones/${product.id}`} className='bestSellerPhones'>
                          <button>
                              Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
          </div>
          <button onClick={nextProduct} disabled={currentProduct >= maxIndex} className='next_btn'>
              <FaArrowRight />
          </button>
        </div>

      </section>



      <section className="brands_section">
        <div className='brands_title'>
          <h1>Brands</h1>
        </div>
        <div className='brands_container'>
        
          {brandsData.map((product, index) => (
            <div
              className='brands_div'
              key={index}
              onClick={() => navigate(`/category/${product.name.toLowerCase()}`)}
              
            >
              <div className='brands_image'>
                <img src={product.image} alt={product.name} />
              </div>
              <div className='brands_name'>
                {product.name}
              </div> 
            </div>
          ))}
        </div>
      </section>


      <section className="slider_container">

        <div className="slider_wrapper">
          <div className='slider_header'>
            <h1>Monitors</h1>
          </div>
          <button onClick={prevProduct} disabled={currentProduct === 0} className='prev_btn'>
            <FaArrowLeft />
          </button>
          <div className="slider_track">
            <div className="slider_view" style={{ transform: `translateX( -${currentProduct * 270}px )` }}>
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
              </div>
          </div>
          <button onClick={nextProduct} disabled={currentProduct >= maxIndex} className='next_btn'>
              <FaArrowRight />
          </button>
        </div>
        
      </section>


      <Footer />
    </>
  );
};
