import React, { use, useState } from 'react'
import { Link } from 'react-router-dom'
import './layout.css'

import Logo from '../assets/images/default-logo.png'

import { IoSearchOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaBarsStaggered } from "react-icons/fa6";

import { IoIosPhonePortrait } from "react-icons/io";
import { LiaTabletSolid } from "react-icons/lia";
import { IoMdClose } from "react-icons/io";

import UsaFlag from '../assets/images/usa-flag.svg'
import GeorgianFlag from '../assets/images/georgia-flag-icon.svg'




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
                <Link to='/cart' className='Cart_link'>
                    <div className='cart_container'>
                        Cart
                    </div>
                </Link>
                <div className="icon_container">
                    <FaRegCircleUser className="signIn_icon" />

                    <div className="language_icon">
                        <img src={UsaFlag} alt="USA Flag" className='language_icon'/>
                        <div className="change_language_dropdown">
                            <div className='language_dropdown'>
                                <div className='language_en'>
                                    <img src={UsaFlag} alt="USA Flag" className='USAFlag'/>
                                    <p>English (US)</p>
                                </div>
                                <div className='language_ge'>
                                    <img src={GeorgianFlag} alt="Georgian Flag" className='GeorgianFlag'/>
                                    <p>ქართული (GE)</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <CiHeart className="heart_icon" />

                </div>

            </div>
        </nav>
      </header>
    </>
  )
}

export default Layout
