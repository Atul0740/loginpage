import React, { useEffect } from 'react'
import './Form.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const Form = () => {

    const [email, setemail] = useState("")
    const [emailError, setemailError] = useState('.')
    const [passwordError, setpasswordError] = useState('.')
    const [password, setpassword] = useState("")
    const handleemails = (e) => {
        setemail(e.target.value);
        setemailError('.');
        document.getElementById('email-errp').style.visibility='hidden';
    };
    const handlepasswords = (e) => {
        setpassword(e.target.value);
        setpasswordError('.');
        document.getElementById('pass-errp').style.visibility='hidden';
    };
    useEffect(() => {
        let label = document.getElementById('email-labelled');
        let input = document.getElementById('input-email');
        if (email === "") {
            label.classList.remove('email-label-focussed');
            input.classList.remove('outfocus');
            input.classList.add('infocus')
        }
        else {
            label.classList.add('email-label-focussed');
            input.classList.add('outfocus');
            input.classList.remove('infocus')
        }
    }, [email])

    useEffect(() => {
        let label = document.getElementById('password-labelled');
        let input = document.getElementById('input-password');
        if (password === "") {
            label.classList.remove('password-label-focussed');
            input.classList.remove('outfocus');
            input.classList.add('infocus')
        }
        else {
            label.classList.add('password-label-focussed');
            input.classList.add('outfocus');
            input.classList.remove('infocus')
        }
    }, [password])
    const valid = () => {
        if (email === '' || password === '') {
            if (email === ''){
                setemailError('Please Enter Email')
                document.getElementById('email-errp').style.visibility='visible';
            }
            if (password === ''){
                setpasswordError('Please Enter Password')
                document.getElementById('pass-errp').style.visibility='visible';
            }
            return false;
        }
        if (email.includes('@') && email.includes('.'));
        else {
            setemailError('Enter Valid Email')
            document.getElementById('email-errp').style.visibility='visible';
            return false;
        }
        return true;
    }
    const HandleSubmit = (e) => {
        e.preventDefault();
        if (valid()) {
            setemail('');
            setpassword('')
        }
    }
    return (
        <div className='form' data-aos='zoom-in' >
            <div className="text">
                <div className="logo">
                    <a href="https://www.thesocialcomment.com/" target="_blank" rel="noreferrer"> thesocialcomment</a>
                </div>
                <div className="page-text">Welcome Back. Please Login</div>
                <form onSubmit={HandleSubmit} className='login'>
                    <div style={{marginBottom:"0px"}}>
                        <div className='input-content infocus' id='input-email'>
                            <i class="fa fa-envelope"></i>
                            <input type="email" name="email" className='email-input' autoComplete="off" id="email" required value={email} onChange={handleemails} />
                            <label htmlFor="email" className='email-label' id='email-labelled'>Email</label>

                        </div>
                        <p style={{ color: "red", fontWeight: "bolder", marginTop: "0px" }} id='email-errp'>{emailError}</p>
                    </div>
                    <div style={{marginTop:"0px"}}>
                        <div className='input-content infocus' id='input-password'>
                            <i class="fa fa-lock"></i>
                            <input type="password" name="password" className='password-input' id="password" required value={password} onChange={handlepasswords} />
                            <label htmlFor="password" className='password-label' id='password-labelled'>Password</label>

                        </div>
                        <p style={{ color: "red", fontWeight: "bolder",marginTop:"0px" }} id='pass-errp'>{passwordError}</p>
                    </div>
                    <div className="forgot"> <a href="/"> Forgot my password </a></div>
                    <NavLink to="/login">
                        <button type="submit" className="login-btn" onClick={HandleSubmit} >Login</button></NavLink>
                    <NavLink to='/signup'>
                        <button className="signup">Sign Up</button></NavLink>
                </form>
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

            </div>

            <div className="bg">
                
            </div>
        </div>
    )
}

export default Form
