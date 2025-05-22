import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './layout.css'

import Logo from '../assets/images/default-logo.png'

import { IoSearchOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";

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

    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
    
  return (
    <>
      <header>
        <nav className='navbar'>
            <div className='navbar_left'>
                <Link to="/" className='website_logo'> 
                    <h1><i>Electric</i></h1>
                </Link> 
            </div>
            <div className='navbar_middle'>
                <div className='search_wrapper'>
                    <input type='search'   
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    placeholder="Search products..."  
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleSearch();
                        }
                    }}/>
                </div>
                <div>
                    <IoSearchOutline className='search_icon'/>
                </div>
            </div>
            <div className='navbar_right'>
                <Link to='/cart' className='Cart_link'>
                    <div className='cart_container'>
                        Cart
                        <IoCartOutline />
                    </div>
                </Link>
                <Link to='/signIn' className='Cart_link'>
                    <div className='cart_container'>
                        Log In
                        <FaRegCircleUser />
                    </div>
                </Link>
            
            </div>
            <div className='navbar_bars_popUp'>
                <FaBars  className='bar_icon' onClick={notHidden} />
                <CiHeart className="heart_icon" />
            </div>
        </nav>
      </header>
    

      {popUp && (
        <>
            <div className='layout_popup_overlay'>
                <div className='layout_popup'>
                    <div className='categorie_list'>
                        <div className='goback_div' onClick={hidden}>
                            <MdArrowBackIos />
                            Go back
                        </div>
                        <ul>
                            <div>
                                <li>Mobile</li>
                                <MdArrowForwardIos />
                            </div>

                            <div>
                                <li>Television</li>
                                <MdArrowForwardIos />
                            </div>

                            <div>
                                <li>Computer</li>
                                <MdArrowForwardIos />
                            </div>

                            <div>
                                <li>Tablet</li>
                                <MdArrowForwardIos />
                            </div>

                            <div>
                                <li>Mobile</li>
                                <MdArrowForwardIos />
                            </div>

                            <div>
                                <li>other</li>
                                <MdArrowForwardIos />
                            </div>
                        </ul>
                    </div>
                    <div className='add_categorie_btn'>
                        <Link to='/add-categorie'>
                            <button onClick={hidden}>add Categories</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
      )}
    </>
  )
}

export default Layout
