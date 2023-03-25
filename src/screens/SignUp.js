import React, { useRef } from 'react'
import { auth } from '../features/firebase'
import './SignUp.css'

function SignUp() {

    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const register = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        }).catch((error) => {
            alert(error.message)
        })
    }

    const SignIn = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
         ).then((authUser)=>{
            console.log(authUser)
         }).catch((error)=>{
            alert(error.message)
         })
    }

    return (
        <div className='signupScreen'>
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} type="email" placeholder='email' />
                <input ref={passwordRef} type="password" placeholder='password' />
                <button type='submit' onClick={SignIn}> Sign In</button>

                <h4>
                    <span className='signUpScreen__gray'>New to Netflix? </span>
                    <span 
                    onClick={register}
                    className='signUpScreen__link'>
                    Sign up Now</span>
                </h4>
            </form>
        </div>
    )
}

export default SignUp