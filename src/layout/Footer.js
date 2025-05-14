import React from 'react'

import { LiaFacebookF } from "react-icons/lia";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";



const Footer = () => {
  return (
    <>
      <footer>
        <div className='footer_container'>
            <div className='footer_compmany'>
                <h2>Company</h2>
                <ul>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                </ul>
            </div>
            <div className='footer_get_help'>
                <h2>Get Help</h2>
                <ul>
                    <li>FAQ</li>
                    <li>Shipping & Returns</li>
                    <li>Order Tracking</li>
                    <li>Payment Options</li>
                </ul>
            </div>
            <div className='footer_online_shop'>
                <h2>Online Shop</h2>
                <ul>
                    <li>Shop by Category</li>
                    <li>Shop by Brand</li>
                    <li>Deals & Promotions</li>
                    <li>Gift Cards</li>
                </ul>
            </div>
            <div className='footer_follow_us'>
                <h2>Follow Us</h2>
                <div className='social_media_icons'>
                    <LiaFacebookF className='facebook'/>
                    <RiTwitterXFill className='twitter'/>
                    <FaInstagram className='instagram'/>
                    <FaLinkedinIn className='linkedin'/>
                </div>
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
