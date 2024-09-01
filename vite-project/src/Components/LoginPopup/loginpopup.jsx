import React, { useState } from 'react'
import './loginpopup.css'
import { assets } from '../../assets/assets'
const loginpopup = ({setShowlogin}) => {
  const [currState,setcurrState] = useState("Sign Up")
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={()=>setShowlogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState==="Login"?<></>:<input type="text" placeholder='Your name' required/>}
         
          <input type="email" placeholder='Your email' required/>
          <input type="password" placeholder='Password' required/>
        </div>
        <button>{currState==="Sign Up"?"Create Account":"Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required/>
          <p>By Continuing, I agree to the terms and Conditions</p>
        </div>
        {currState==="Login"?<p>Create a new account?<span onClick={()=>setcurrState("Sign Up")} >Click here</span></p>:<p>Already have an account? <span onClick={()=>setcurrState("Login")} >Login here</span></p>}
        
        
      </form>
    </div>
  )
}

export default loginpopup