import React, { useState } from 'react'
import './Login.css'
import SignUp from './SignUp'
function Login() {
    const [signIn, setSignIn]= useState (false)
  return (
    <div className='loginScreen'>
        <div className='loginScreen__background'>
            <img className='loginScreen__logo' alt='netflix-login' src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'/>

            <button className='loginScreen__button'
             onClick={()=>setSignIn(!signIn)}
             >
                Sign in
            </button>

            <div className='loginScreen__gradient'/>
        </div>
        <div className='loginScreen__body'>
            {signIn? (
                <SignUp/>
            ):( 
            <>
            <h1>
                Unlimited films, TV programmes and more.
            </h1>
            <h2>Watch anywhere. Cancel anytime</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership</h3>
            <div className='loginScreen__input'>
                <form>
                    <input 
                    type='email'
                    placeholder='Enter email address'
                    />
                    <button 
                    onClick={()=>setSignIn(true)}
                    className='loginScreen__getStarted'>Get Started</button>
                </form>
                
            </div>
            </>)
            }
            

        </div>

    </div>
  )
} 

export default Login