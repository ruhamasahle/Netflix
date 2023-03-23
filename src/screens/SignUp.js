import React from 'react'
import './SignUp.css'

function SignUp() {

    const register =(e)=>{
        e.preventDefault()

    }

    const SignIn =(e)=>{
        e.preventDefault()
    }

    return (
        <div className='signupScreen'>
            <form>
                <h1>Sign In</h1>
                <input type="email" placeholder='email' />
                <input type="password" placeholder='password'/>
                <button type='submit' onClick={SignIn
                }> Sign In</button>
                
                <h4>
                    <span className='signUpScreen__gray'>New to Netflix? </span>
                    <span onClick={register}
                    className='signUpScreen__link'>Sign up Now</span>
                </h4>
            </form> 
        </div>
    )
}

export default SignUp