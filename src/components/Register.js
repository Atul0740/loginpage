import React from 'react'
import { NavLink } from 'react-router-dom';
import './Register.css'
const Register = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className='register'>
            <div className="text">
                <div className="logo">
                    thesocialcomment
                </div>
                <div className="page-text">Create Account</div>
                <div className="account-details">Account Details</div>
                <form onSubmit={handleSubmit} className='login'>
                    <label htmlFor="name" className='name-label'>Name</label>
                    <div className='input-content'>
                        <input type="text" name="name" id="name" className='email-input' autoComplete="off" placeholder="Name" />
                    </div>
                    <label htmlFor="username" className='username-label'>Username</label>
                    <div className='input-content'>
                        <input type="text" name="username" id="username" className='email-input' autoComplete="off" placeholder="Usename" />
                    </div>
                    <label htmlFor="email" className='email-label-2'>Email</label>
                    <div className='input-content'>
                        <input type="email" name="email" id="email" className='email-input' autoComplete="off" placeholder="Email" />
                    </div>
                    <label htmlFor="password" className='password-label-2'>Password</label>
                    <div className='input-content'>
                        <input type="password" name="email" id="password" className='password-input' placeholder="Password" />
                    </div>
                    <label htmlFor="referral" className='referral-label'>Referral (Optional)</label>
                    <div className='input-content'>
                        <input type="text" name="referral" id="referral" className='email-input' autoComplete="off" placeholder="Referral" />
                    </div>

                </form>
                <div className="personal-details">Personal Details</div>
                <div className="radio-toolbar">
                    <div className="gender-title">GENDER</div>
                    <div className="radio">
                        <input type="radio" name='gender' id='male' />
                        <label htmlFor="male" className='male'>
                            <span className="label-text">Male</span>
                        </label>
                        <input type="radio" name='gender' id='female' />
                        <label htmlFor="female" className="female">
                            <span className="label-text">Female</span>
                        </label>
                    </div>
                </div>
                <div className="radio-toolbar">
                    <div className="academics-title">Academics</div>
                    <div className="radio">
                        <input type="radio" name='academics' id='graduate' />
                        <label htmlFor="graduate" className='male'>
                            <span className="label-text">Graduate</span>
                        </label>
                        <input type="radio" name='academics' id='undergraduate' />
                        <label htmlFor="undergraduate" className="female">
                            <span className="label-text">Undergraduate</span>
                        </label>
                    </div>
                </div>
                <div className="birthday">
                    <input type="date" name="birthday" id="birthday" className="birthday-input" />
                    <label htmlFor="birthday">
                        <div className="birthday-title">Date-of-birth</div>
                    </label>
                </div>
                <div className="terms">
                    <input type="checkbox" name="checkbox" className="checkbox" id="checkbox" />
                    <label htmlFor="checkbox">
                        <span className="terms-text">By sign up you agree to the terms and condition and privacy policy</span>
                    </label>
                </div>
                <div className="signup-page-btns">
                    <NavLink to='/signup'>
                        <button className="signup">Register</button>
                    </NavLink>
                    <NavLink to="/login">
                        <button type="submit" className="login-btn">Login</button>
                    </NavLink>
                </div>
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
            <div className="bg"></div>
        </div>
    )
}

export default Register
