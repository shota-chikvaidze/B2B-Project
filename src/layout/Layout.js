import React, { use, useState } from 'react'
import { Link } from 'react-router-dom'
import './layout.css'

import Logo from '../assets/images/default-logo.png'

import { IoSearchOutline } from "react-icons/io5";
import { PiSignIn } from "react-icons/pi";
import { FaHeart } from "react-icons/fa6";
import { FaBarsStaggered } from "react-icons/fa6";

import { IoIosPhonePortrait } from "react-icons/io";
import { LiaTabletSolid } from "react-icons/lia";
import { GrLanguage } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";




const Layout = () => {

    const [popUp, setPopUp] = useState(false)

    const notHidden = () => {
        setPopUp(true)
    }
    const hidden = () => {
        setPopUp(false)
    }

  return (
    <>
      <header>
        <nav className='navbar'>
            <div className='navbar_left'>
                <Link to="/" > 
                    <img src={Logo} />
                </Link>
                <div className='all_categories_div' onClick={notHidden}>
                    <FaBarsStaggered />
                    All Categories
                </div>

                {
                    popUp && (
                        <>
                            <div className='popup_ovelay'>
                                <div className='popup_container'>
                                    <IoMdClose onClick={hidden} className='hide_popup'/>
                                    <ul className='categoryList'>
                                        
                                        <li className='list_phone'>
                                            <IoIosPhonePortrait />
                                            Phone
                                            <div className='phone_side_dropdown'>
                                                
                                            </div>
                                        </li>
                                        
                                        <li className='list_phone'>
                                            <LiaTabletSolid />
                                            Tablets
                                        </li>
                                        <li>Televisions </li>
                                        <li>Smartwatches</li>
                                        <li>Bluetooth Speakers</li>
                                        <li>Digital Cameras</li>
                                        <li>Gaming Consoles</li>
                                        <li>Headphones </li>
                                        <li>Drones</li>
                                        <li>Home Assistants</li>
                                        <li>Smart Thermostats</li>
                                        <li>VR Headsets</li>
                                        <li>Wearable Fitness Trackers</li>
                                    </ul>

                                </div>
                            </div>
                        </>
                    )
                }

            </div>
            <div className='navbar_middle'>
                <div className='search_wrapper'>
                    <input type='search' placeholder='Search...'/>
                </div>
                <div>
                    <IoSearchOutline />
                </div>
            </div>
            <div className='navbar_right'>
                <div className='cart_container'>
                    Cart
                </div>
                <div className='icon_container'>
                    <PiSignIn className='signIn_icon'/>
                    <FaHeart className='heart_icon'/>
                    <GrLanguage className='language_icon'/>
                </div>
            </div>
        </nav>
      </header>
    </>
  )
}

export default Layout
