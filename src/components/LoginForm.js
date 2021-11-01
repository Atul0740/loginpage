import React from 'react'
import './Form.css'
import photo from '../assets/about.png'
const Form = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className='form'>
            <div className="text">
                <div className="logo">
                    thesocialcomment
                </div>
                <div className="page-text">Welcome Back. Please Login</div>
                <div className="social-button">
                <button className='facebook'><i class="fab fa-facebook-f" style={{ fontSize: "15px" }} ></i>Login with facebook</button>
                <button className='google'><i class="fab fa-google" style={{ fontSize: "15px" }} ></i>Login with gmail</button>
                </div>
                <div className="or">-OR-</div>

                <div className="photo">
                    <img src={photo} alt="" />
                </div>
                <form onSubmit={handleSubmit} className='login'>
                    <label htmlFor="email" className='email-label'>Email</label>
                    <div className='input-content'>
                        <i class="fa fa-envelope"></i>
                        <input type="email" name="email" className='email-input' autoComplete="off"/>
                    </div>
                    <label htmlFor="password" className='password-label'>Password</label>
                    <div className='input-content'>
                        <i class="fa fa-lock"></i>
                        <input type="password" name="email" className='password-input' />
                    </div>
                    <div className="forgot"> <a href="/"> Forgot my password </a></div>
                    <button type="submit" className="login-btn">Login</button>
                    <button className="signup">Sign Up</button>
                </form>
                <div className="footer">
                    <div className="first-content">
                        <span className="logo-text">thesocialcomment</span>
                        <span className="copyright">&copy;2020</span>
                    </div>
                    <div className="second-content">
                        <div className="icons" >
                            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                                <i class="fab fa-facebook-square"  ></i>
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                                <i class="fab fa-instagram" ></i></a>
                            <a href="https://www.twitte.com" target="_blank" rel="noreferrer">
                                <i class="fab fa-twitter-square"  ></i></a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                                <i class="fab fa-linkedin" ></i></a>
                        </div>

                    </div>
                </div>

            </div>

            <div className="bg">

            </div>
        </div>
    )
}

export default Form
