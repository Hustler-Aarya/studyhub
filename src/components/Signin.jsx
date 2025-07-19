import React from 'react'

const Login = () => {
  return (
    <>
    
    <div className="form">
      <h2>Login/Sign Up</h2>
      <input type="email" name="email" placeholder="Enter Email Here" />
      <input type="password" name="password" placeholder="Enter Password Here" />
      <button className="btnn"><a href="#">Login button</a></button>
      <p className="link">Don't have an account<br />
        <a href="Sign Up">Sign up</a> here
      </p>
      <p className="lnw">Log In With</p>
      <div className="icns">
        <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
        <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
        <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
        <a href="#"><ion-icon name="logo-google"></ion-icon></a>
        <a href="#"><ion-icon name="logo-skype"></ion-icon></a>
      </div>
    </div>
  

    </>
  )
}

export default Login