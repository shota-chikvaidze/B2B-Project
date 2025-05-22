import React from 'react'
import { useParams } from 'react-router-dom'

import BestSellerPhoneDetailsData from '../../data/sliderData/SliderData'


import { FaHeart } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const BestSellerPhoneDetails = () => {

  const { id } = useParams()
  const bestSellerPhones = Object.values(BestSellerPhoneDetailsData).flat().find(p => p.id === Number(id))

  return (
    <>
        <section className='productDetailsSect'>
            <div className='productDetailsWrapper'>
                <div className='details_image_side'>
                    <div className='details_image_wrapper'>
                        <img src={bestSellerPhones.image} />
                        <FaHeart className='image_heart_icon'/>
                        <IoSettingsOutline className='image_settings_icon' />                            
                    </div>
                    
                    <div className='product_data'>
                        <div className='product_description_name'>
                            {bestSellerPhones.description}
                        </div>
                        <div className='product_description_stats'>
                        <ul>
                            <li>
                                <div className='product_stats_Understandable_description'>Specs:</div>
                                <div>{bestSellerPhones.specs}</div>
                            </li>
                            <li>
                                <div className='product_stats_Understandable_description'>Storage:</div>
                                <div>{bestSellerPhones.features[0]}</div>
                            </li>
                            <li>
                                <div className='product_stats_Understandable_description'>Chip:</div>
                                <div>{bestSellerPhones.features[1]}</div>
                            </li>
                            <li>
                                <div className='product_stats_Understandable_description'>Display:</div>
                                <div>{bestSellerPhones.features[2]}</div>
                            </li>
                            <li>
                                <div className='product_stats_Understandable_description'>Camera:</div>
                                <div>{bestSellerPhones.features[3]}</div>
                            </li>
                            <li>
                                <div className='product_stats_Understandable_description'>OS:</div>
                                <div>{bestSellerPhones.features[4]}</div>
                            </li>

                        </ul> 
                        </div>
                    </div>
                </div>
                
                <div className='purchase_product'>
                    <div className='product_price'>
                        <p>Price: {bestSellerPhones.price}$</p>
                        <p>From <span>27.83 $ </span> per month</p>
                    </div>
                    <div className='purchase_or_cart'>
                        <button>Add to cart</button>
                        <button>Purchase</button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default BestSellerPhoneDetails
