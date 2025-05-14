import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import './productDetails.css'

import ProductListData from '../../data/productListData/ProductListData'

import { FaHeart } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";


const ProductDetails = () => {

    const { id } = useParams()
    const product = Object.values(ProductListData).flat().find(p => p.id === Number(id))

    const [popUp, setPopUp] = useState(false)

    const handleOpenPopUp = () => {
        setPopUp(true)
    }
    const handleclosePopUp = () => {
        setPopUp(false)
    }

  return (
    <>
        <section className='productDetailsSect'>
            <div className='productDetailsWrapper'>
                <div className='details_image_side'>
                    <div className='details_image_wrapper'>
                        <img src={product.image} />
                        <FaHeart className='image_heart_icon'/>
                        <IoSettingsOutline className='image_settings_icon' onClick={handleOpenPopUp} />                            
                    </div>
                    
                    <div className='product_data'>
                        <div className='product_description_name'>
                            {product.description}
                        </div>
                        <div className='product_description_stats'>
                        <ul>
                            <li>
                                <div className='product_stats_Understandable_description'>Specs:</div>
                                <div>{product.specs}</div>
                            </li>
                            <li>
                                <div className='product_stats_Understandable_description'>Storage:</div>
                                <div>{product.features[0]}</div>
                            </li>
                            <li>
                                <div className='product_stats_Understandable_description'>Chip:</div>
                                <div>{product.features[1]}</div>
                            </li>
                            <li>
                                <div className='product_stats_Understandable_description'>Display:</div>
                                <div>{product.features[2]}</div>
                            </li>
                            <li>
                                <div className='product_stats_Understandable_description'>Camera:</div>
                                <div>{product.features[3]}</div>
                            </li>
                            <li>
                                <div className='product_stats_Understandable_description'>OS:</div>
                                <div>{product.features[4]}</div>
                            </li>

                        </ul> 
                        </div>
                    </div>
                </div>
                
                <div className='purchase_product'>
                    <div className='product_price'>
                        <p>Price: {product.price}$</p>
                        <p>From <span>27.83 $ </span> per month</p>
                    </div>
                    <div className='purchase_or_cart'>
                        <button>Add to cart</button>
                        <button>Purchase</button>
                    </div>
                </div>
            </div>
        </section>

        {
            popUp && (
                <>
                    <div className='product_desc_popUp_overlay'>
                        <div className='product_desc_popUp'>
                            <div className='popUp_Specifications'>
                                <h2>Specifications</h2>
                                <IoMdClose onClick={handleclosePopUp} className='popUp_close' />
                            </div>

                            <ul>
                            <li>
                                <div className='product_stats_Understandable_description'>Specs:</div>
                                <div>{product.specs}</div>
                            </li>
                            <li>
                                <div className='product_stats_Understandable_description'>Storage:</div>
                                <div>{product.features[0]}</div>
                            </li>
                            <li>
                                <div className='product_stats_Understandable_description'>Chip:</div>
                                <div>{product.features[1]}</div>
                            </li>
                            <li>
                                <div className='product_stats_Understandable_description'>Display:</div>
                                <div>{product.features[2]}</div>
                            </li>
                            <li>
                                <div className='product_stats_Understandable_description'>Camera:</div>
                                <div>{product.features[3]}</div>
                            </li>
                            <li>
                                <div className='product_stats_Understandable_description'>OS:</div>
                                <div>{product.features[4]}</div>
                            </li>
                            <li>
                                <div className='product_stats_Understandable_description'>HZ</div>
                                <div>{product.features[5]}</div>
                            </li>
                            <li>
                                <div className='product_stats_Understandable_description'>Release Date:</div>
                                <div>{product.releaseDate}</div>
                            </li>
                            <li>
                                <div className='product_stats_Understandable_description'>Weight:</div>
                                <div>{product.weight}</div>
                            </li>
                            <li>
                                <div className='product_stats_Understandable_description'>Dimensions:</div>
                                <div>{product.dimensions}</div>
                            </li>
                            <li>
                                <div className='product_stats_Understandable_description'>Connectivity:</div>
                                <div>{product.connectivity}</div>
                            </li>

                        </ul> 

                        </div>
                    </div>
                </>
            )
        }

    </>
  )
}

export default ProductDetails
