import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import allProducts from '../../data/productListData/ProductListData';

import { IoAddOutline } from "react-icons/io5";


const ProductCategoryPage = () => {

    const { categoryName } = useParams()
    const category = categoryName.toLowerCase()
    const products = allProducts[category] || []
    
    const minLimit = 0;
    const maxLimit = 5200;
    
    const [minPrice, setMinPrice] = useState(minLimit);
    const [maxPrice, setMaxPrice] = useState(maxLimit);
    
    const handleMinChange = (e) => {
      const value = Math.min(Number(e.target.value), maxPrice - 1);
      setMinPrice(value);
    };

    const handleMaxChange = (e) => {
      const value = Math.max(Number(e.target.value), minPrice + 1);
      setMaxPrice(value);
    }

  return (

    <>

        <section className='product_list_section'>
            <div className='filter_side'>
                <div className="price-slider-container">
                  <div className="slider">

                    <div
                      className="slider-range"
                      style={{
                        left: `${(minPrice / maxLimit) * 100}%`,
                        right: `${100 - (maxPrice / maxLimit) * 100}%`
                      }}
                    ></div>
            
                    <input
                      type="range"
                      min={minLimit}
                      max={maxLimit}
                      value={minPrice}
                      onChange={handleMinChange}
                      className="thumb thumb-left"
                    />
                    <input
                      type="range"
                      min={minLimit}
                      max={maxLimit}
                      value={maxPrice}
                      onChange={handleMaxChange}
                      className="thumb thumb-right"
                    />
            
                  </div>
                  
                  <div className="price-inputs">
                    <div>
                      <label>MIN:</label>
                      <input type="number" value={minPrice} onChange={handleMinChange} />
                    </div>
                    <div>
                      <label>MAX:</label>
                      <input type="number" value={maxPrice} onChange={handleMaxChange} />
                    </div>
                  </div>
                </div>

                <div className='internal_memory'>
                    <h3>Internal memory</h3>
                    <div className='memory_filter'>
                        <div>
                            <input type='checkbox' id='checkboxId_1'/>
                            <label for="checkboxId_1">128 GB</label>    
                        </div>
                        
                        <div>
                            <input type='checkbox' id='checkboxId_1'/>
                            <label for="checkboxId_1">256 GB</label>
                        </div>
                        
                        <div>
                            <input type='checkbox' id='checkboxId_1'/>
                            <label for="checkboxId_1">512 GB</label>
                        </div>

                        <div>
                            <input type='checkbox' id='checkboxId_1'/>
                            <label for="checkboxId_1">1 TB</label>
                        </div>
                    </div>
                </div>

                <div className='ram'>
                    <h3>RAM</h3>
                    <div className='ram_filter'>
                        <div>
                            <input type='checkbox' id='checkboxId_1'/>
                            <label for="checkboxId_1">4 GB</label>    
                        </div>
                        
                        <div>
                            <input type='checkbox' id='checkboxId_1'/>
                            <label for="checkboxId_1">6 GB</label>
                        </div>
                        
                        <div>
                            <input type='checkbox' id='checkboxId_1'/>
                            <label for="checkboxId_1">8 GB</label>
                        </div>

                    </div>
                </div>

                <div className='screen_size'>
                    <h3>Screen size</h3>
                    <div className='screen_size_filter'>
                        <div>
                            <input type='checkbox' id='checkboxId_1'/>
                            <label for="checkboxId_1">6.9 inches</label>    
                        </div>
                        
                        <div>
                            <input type='checkbox' id='checkboxId_1'/>
                            <label for="checkboxId_1">6.7 inches</label>
                        </div>
                        
                        <div>
                            <input type='checkbox' id='checkboxId_1'/>
                            <label for="checkboxId_1">6.3 inches</label>
                        </div>

                        <div>
                            <input type='checkbox' id='checkboxId_1'/>
                            <label for="checkboxId_1">6.1 inches</label>
                        </div>

                    </div>
                </div>

                <div className='update_frequency'>
                    <h3>Update frequency</h3>
                    <div className='update_frequency_filter'>
                        <div>
                            <input type='checkbox' id='checkboxId_1'/>
                            <label for="checkboxId_1">6.9 inches</label>    
                        </div>
                        
                        <div>
                            <input type='checkbox' id='checkboxId_1'/>
                            <label for="checkboxId_1">6.7 inches</label>
                        </div>
                        
                        <div>
                            <input type='checkbox' id='checkboxId_1'/>
                            <label for="checkboxId_1">6.3 inches</label>
                        </div>

                        <div>
                            <input type='checkbox' id='checkboxId_1'/>
                            <label for="checkboxId_1">6.1 inches</label>
                        </div>

                    </div>
                </div>

            </div>
            <div className='product_list_side'>
                {
                    products.map(product => (
                        
                        <>
                            <Link to={`/product/${product.id}`}>
                                <div className='product_list_card' key={product.id}>
                                    <div className='product_img'>
                                        <img src={product.image} />
                                        <button className='add_product'>
                                            <IoAddOutline />
                                        </button>
                                    </div>
                                    <div className='product_name__add'>
                                        <div className='product__name'>
                                            {product.name}
                                        </div>
                                        <div className='product__specs'>
                                            { product.specs }
                                        </div>
                                    </div>
                                    <div className='product__details'>
                                        <button>
                                            Details
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </>
     
                    ))
                }
            </div>
        </section>


    </>

  );
};

export default ProductCategoryPage;
