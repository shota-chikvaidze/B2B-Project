import React from 'react'
import './signIn.css'

import { LiaFacebookF } from "react-icons/lia";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";


export const SignIn = () => {
  return (
    <>
      <section className='user_signin_sect'>

        <div className='signin_container'>
          <div className='signin_cotext_side'>
            <div className='signin_cotext_side_title'>
              <h3>Hello, Welcome</h3>
            </div>
            <div className='signin_cotext_side_paragraph'>
              <p>Don't have an account?</p>
            </div>
            <div className='signin_cotext_side_button'>
              <button>Register</button>
            </div>
          </div>

          <div className='signin_form_side'>
            <form>
              <div className='signin_form_title'>
                <h1>Login</h1>
              </div>
              <div className='signin_form_input_div'>
                <div>
                  <input type='text' placeholder='Username' />
                  <FaUser />
                </div>
                <div>
                  <input type='password' placeholder='Password' />
                  <FaLock />
                </div>
              </div>
              <div className='signin_form_foergot_password'>
                <p>Forgot Password?</p>
              </div>
              <div className='signin_form_login_button'>
                <button>Login</button>
              </div>
              <div className='login_with_social'>
                <p>or login with social platforms</p>
              </div>
              <div className='signin_form_social_button'>
                <button>
                  <LiaFacebookF />
                </button>
                <button>
                  <FaGoogle />
                </button>
                <button>
                  <FaGithub />
                </button>
                <button>
                  <FaLinkedinIn />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
