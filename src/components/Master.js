import React, { useState } from 'react'
import './Master.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Master = () => {
    const signUpButton = () => {
        let container = document.getElementById('container');
        container.classList.add('right-panel-active');
        container.style.height = '800px'
    };
    const signInButton = () => {
        let container = document.getElementById('container');
        container.classList.remove('right-panel-active');
        container.style.height = '680px'
    };
    const [date, setDate] = useState(new Date());
    return (
        <div className="container" id="container">
            <div className="form-container sign-in-container">
                <form >
                    <div className='logo'>thesocialcomment</div>
                    <h1>Login</h1>
                    <input type="email" placeholder="Email" style={{ marginBottom: "0px", marginTop: "0px" }} />
                    <p style={{ marginBottom: "0px", marginTop: "0px" }}>Please Enter Email</p>
                    <input type="password" placeholder="Password" style={{ marginBottom: "0px", marginTop: "0px" }}/>
                    <p style={{ marginBottom: "0px", marginTop: "0px" }}>Please Enter Password</p>
                    <a href="/" style={{ marginBottom: "0px", marginTop: "0px" }}>Forgot your password?</a>
                    <button disabled style={{ marginTop: "10px" }}>Login</button>
                    <div className="footer">
                        <div className="first-content">
                            <span className="logo-text">thesocialcomment</span>
                            <span className="copyright">&copy;2020</span>
                        </div>
                        <div className="second-content">
                            <div className="icons" >
                                <a href="https://www.facebook.com/thesocialcomment/" target="_blank" rel="noreferrer">
                                    <i class="fab fa-facebook-square"  ></i>
                                </a>
                                <a href="https://www.instagram.com/thesocialcomment/" target="_blank" rel="noreferrer">
                                    <i class="fab fa-instagram" ></i></a>
                                <a href="https://twitter.com/Social__Comment" target="_blank" rel="noreferrer">
                                    <i class="fab fa-twitter-square"  ></i></a>
                                <a href="https://www.linkedin.com/company/thesocialcomment" target="_blank" rel="noreferrer">
                                    <i class="fab fa-linkedin" ></i></a>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
            <div className="form-container sign-up-container" id='sign-up-container'>
                <form >
                    <div className='logo'>thesocialcomment</div>
                    <h1>Create Account</h1>
                    <input type="text" placeholder="Name" style={{ marginBottom: "0px", marginTop: "0px" }} />
                    <p style={{ marginBottom: "0px", marginTop: "0px" }}>Please Enter Name</p>
                    <input type="text" placeholder="Userame" style={{ marginBottom: "0px", marginTop: "0px" }} />
                    <p style={{ marginBottom: "0px", marginTop: "0px" }}>Please Enter Username</p>
                    <input type="email" placeholder="Email" style={{ marginBottom: "0px", marginTop: "0px" }} />
                    <p style={{ marginBottom: "0px", marginTop: "0px" }}>Please Enter Email</p>
                    <input type="password" placeholder="Password" style={{ marginBottom: "0px", marginTop: "0px" }} />
                    <p style={{ marginBottom: "0px", marginTop: "0px" }}>Please Enter Password</p>
                    <input type="text" placeholder="Referral(Optional)" style={{ marginBottom: "0px", marginTop: "0px" }} />
                    <div className="radio-btn">
                        <div style={{ marginBottom: "0px", marginTop: "0px" }}>
                            <div className="gender" >
                                <span>GENDER</span>
                                <div class="radio-toolbar">
                                    <input type="radio" id="male" name="gender" value="male" />
                                    <label for="male">Male</label>
                                    <input type="radio" id="female" name="gender" value="female" />
                                    <label for="female">Female</label>
                                </div>
                            </div>
                            <p style={{ marginBottom: "0px", marginTop: "0px" }}>Please Select Gender</p>
                        </div>
                        
                        <div style={{ marginBottom: "0px", marginTop: "0px" }}>
                            <div className="gender" >
                                <span>ACADEMICS</span>
                                <div class="radio-toolbar">
                                    <input type="radio" id="graduate" name="academics" value="graduate" />
                                    <label for="graduate">Graduate</label>
                                    <input type="radio" id="undergraduate" name="academics" value="undergraduate" />
                                    <label for="undergraduate">Undergraduate</label>
                                </div>
                            </div>
                            <p style={{ marginBottom: "0px", marginTop: "0px" }}>Please Select Academics</p>
                        </div>
                       
                    </div>
                    <div className="birthday">
                        <div className="birthday-title">Date-of-birth</div>
                        <DatePicker selected={date} onChange={date => setDate(date)} className="Datepicker" />
                    </div>
                    <div className="terms" style={{ marginBottom: "0px", marginTop: "0px" }}>
                        <input type="checkbox" name="checkbox" className="checkbox" id="checkbox" />
                        <label htmlFor="checkbox">
                            <span className="terms-text">By sign up you agree to the terms and condition and privacy policy</span>
                        </label>
                        
                    </div>
                    <p style={{ marginBottom: "0px", marginTop: "0px" }}>Please check this box</p>
                    <button disabled style={{marginTop:"10px"}}>Register</button>
                    <div className="footer">
                        <div className="first-content">
                            <span className="logo-text">thesocialcomment</span>
                            <span className="copyright">&copy; 2020</span>
                        </div>
                        <div className="second-content">
                            <div className="icons" >
                                <a href="https://www.facebook.com/thesocialcomment/" target="_blank" rel="noreferrer">
                                    <i class="fab fa-facebook-square"  ></i>
                                </a>
                                <a href="https://www.instagram.com/thesocialcomment/" target="_blank" rel="noreferrer">
                                    <i class="fab fa-instagram" ></i></a>
                                <a href="https://twitter.com/Social__Comment" target="_blank" rel="noreferrer">
                                    <i class="fab fa-twitter-square"  ></i></a>
                                <a href="https://www.linkedin.com/company/thesocialcomment" target="_blank" rel="noreferrer">
                                    <i class="fab fa-linkedin" ></i></a>
                            </div>
                        </div>
                    </div>
                </form>

            </div>

            <div className="overlay-container" id='overlay-container'>
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className="ghost" id="signIn" onClick={signInButton}>Login</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button className="ghost" id="signUp" onClick={signUpButton}>Register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Master
