import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import './Register.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Register = () => {
    const [name, setname] = useState("")
    const [username, setusername] = useState("")
    const [referral, setreferral] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [nameError, setnameError] = useState('.')
    const [usernameError, setusernameError] = useState('.')
    const [emailError, setemailError] = useState('.')
    const [passwordError, setpasswordError] = useState('.')
    const [gender, setgender] = useState('')
    const [academics, setacademics] = useState('')
    const [genderError, setgenderError] = useState('.')
    const [academicsError, setacademicsError] = useState('.')
    const [checkbox, setcheckbox] = useState(false)
    const [checkedError, setcheckedError] = useState('.')
    const [date, setDate] = useState(new Date());
    const handlename = (e) => {
        setname(e.target.value);
        setnameError('.')
        document.getElementById('name-p').style.visibility = 'hidden'
    };
    const handleusername = (e) => {
        setusername(e.target.value);
        setusernameError('.')
        document.getElementById('user-p').style.visibility = 'hidden'
    };
    const handleemail = (e) => {
        setemail(e.target.value);
        setemailError('.')
        document.getElementById('email-p').style.visibility = 'hidden'
    };
    const handlepassword = (e) => {
        setpassword(e.target.value);
        setpasswordError('.')
        document.getElementById('pass-p').style.visibility = 'hidden'
    };
    const handlereferral = (e) => {
        setreferral(e.target.value);
    };
    const handleGender = (e) => {
        setgender(e.target.value);
        setgenderError('.');
        document.getElementById('gender').style.visibility = 'hidden'
    }
    const handleAcademic=(e)=>{
        setacademics(e.target.value);
        setacademicsError('.');
        document.getElementById('academics').style.visibility = 'hidden'
    }
    const handleCheckbox=(e)=>{
        setcheckbox(e.target.checked);
        setcheckedError('.')
        document.getElementById('checkbox-p').style.visibility = 'hidden'
    }
    useEffect(() => {
        let label1 = document.getElementById('name-label');
        let label2 = document.getElementById('username-label');
        let label3 = document.getElementById('email-label');
        let label4 = document.getElementById('password-label');
        let label5 = document.getElementById('referral-label');
        let input1=document.getElementById('sig-name');
        let input2=document.getElementById('sig-user');
        let input3=document.getElementById('sig-email');
        let input4=document.getElementById('sig-pass');
        let input5=document.getElementById('sig-ref');
        if (name === "") {
            label1.classList.remove('name-label-focus');
            input1.classList.remove('outfocus');
            input1.classList.add('infocus')
        }
        else {
            label1.classList.add('name-label-focus');
            input1.classList.add('outfocus');
            input1.classList.remove('infocus')
        }
        if (username === "") {
            label2.classList.remove('username-label-focus');
            input2.classList.remove('outfocus');
            input2.classList.add('infocus')
        }
        else {
            label2.classList.add('username-label-focus');
            input2.classList.add('outfocus');
            input2.classList.remove('infocus')
        }
        if (email === "") {
            label3.classList.remove('email-label-focus');
            input3.classList.remove('outfocus');
            input3.classList.add('infocus')
        }
        else {
            label3.classList.add('email-label-focus');
            input3.classList.add('outfocus');
            input3.classList.remove('infocus')
        }
        if (password === "") {
            label4.classList.remove('password-label-focus');
            input4.classList.remove('outfocus');
            input4.classList.add('infocus')
        }
        else {
            label4.classList.add('password-label-focus');
            input4.classList.add('outfocus');
            input4.classList.remove('infocus')
        }
        if (referral === "") {
            label5.classList.remove('referral-label-focus');
            input5.classList.remove('outfocus');
            input5.classList.add('infocus')
        }
        else {
            label5.classList.add('referral-label-focus');
            input5.classList.add('outfocus');
            input5.classList.remove('infocus')
        }
    }, [name, username, email, password, referral,gender])
    const valid = () => {
        if (name === '' || username === '' || email === '' || password === '' || gender==='' || academics==='' || checkbox===false) {
            if (name === '') {
                setnameError('Please Enter Name');
                document.getElementById('name-p').style.visibility = 'visible'
            }
            if (username === '') {
                setusernameError('Please Enter Username');
                document.getElementById('user-p').style.visibility = 'visible'
            }
            if (email === '') {
                setemailError('Please Enter Email');
                document.getElementById('email-p').style.visibility = 'visible'
            }
            if (password === '') {
                setpasswordError('Please Enter Password');
                document.getElementById('pass-p').style.visibility = 'visible'
            }
            if(gender===''){
                setgenderError('Please Select Gender');
                document.getElementById('gender').style.visibility = 'visible'
            }
            if(academics===''){
                setacademicsError('Please Select Academics');
                document.getElementById('academics').style.visibility = 'visible'
            }
            if(checkbox===false){
                setcheckedError('Please Check this box');
                document.getElementById('checkbox-p').style.visibility = 'visible'
            }
            return false;
        }
        if (email.includes('@') && email.includes('.'));
        else {
            setemailError('Enter Valid Email')
            document.getElementById('email-p').style.visibility = 'visible'
            
            return false;
        }
        return true;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (valid()) {
            setname('')
            setusername('')
            setemail('')
            setpassword('')
            setreferral('')
            setgender('')
            setacademics('');
            setcheckbox(false)
            document.querySelector('input[type=radio][name=gender]:checked').checked=false;
            document.querySelector('input[type=radio][name=academics]:checked').checked=false;
            document.querySelector('input[type=checkbox]:checked').checked=false;
        }
    };

    return (
        <div className='register' data-aos="zoom-in">
            <div className="text">
                <div className="logo">
                    <a href="https://www.thesocialcomment.com/" target="_blank" rel="noreferrer"> thesocialcomment</a>
                </div>
                <div className="page-text">Create Account</div>
                <div className="account-details">Account Details</div>
                <form onSubmit={handleSubmit} className='login signup-form' id='signup-form'>
                    <div className="names">
                        <div >
                            <div className='input-content infocus' id='sig-name'>
                                <input type="text" name="name" id="name" className='email-input' value={name} autoComplete="off" onChange={e => handlename(e)} />
                                <label htmlFor="name" className='name-label' id='name-label'>Name </label>
                            </div>
                            <p style={{ color: "red", fontWeight: "bolder", marginTop: "0px" }} id='name-p'>{nameError}</p>
                        </div>
                        <div>
                            <div className='input-content infocus' id='sig-user'>
                                <input type="text" name="username" id="username" className='email-input' value={username} autoComplete="off" onChange={e => handleusername(e)} />
                                <label htmlFor="username" className='username-label' id='username-label'>Username</label>
                                <span></span>
                            </div>
                            <p style={{ color: "red", fontWeight: "bolder", marginTop: "0px" }} id='user-p'>{usernameError}</p>
                        </div>
                    </div>
                    <div className="names">
                        <div>
                            <div className='input-content infocus' id='sig-email'>
                                <input type="email" name="email-signup" id="email-2" className='email-input' value={email} autoComplete="off" onChange={e => handleemail(e)} />
                                <label htmlFor="email-2" className='email-label-2' id='email-label'>Email</label>
                            </div>
                            <p style={{ color: "red", fontWeight: "bolder", marginTop: "0px" }} id='email-p'>{emailError}</p>
                        </div>
                        <div>
                            <div className='input-content infocus' id='sig-pass'>
                                <input type="password" name="password-signup" id="password-2" className='password-input' value={password} onChange={e => handlepassword(e)} />
                                <label htmlFor="password-2" className='password-label-2' id='password-label'>Password</label>
                            </div>
                            <p style={{ color: "red", fontWeight: "bolder", marginTop: "0px" }} id='pass-p'>{passwordError}</p>
                        </div>
                    </div>
                    <div>
                        <div className='input-content infocus' id='sig-ref'>
                            <input type="text" name="referral" id="referral" className='email-input' value={referral} autoComplete="off" onChange={e => handlereferral(e)} />
                            <label htmlFor="referral" className='referral-label' id='referral-label'>Referral (Optional)</label>
                        </div>
                    </div>

                </form>
                <div className="personal-details">Personal Details</div>

                <div className="radio-buttons">
                    <div>
                        <div className="radio-toolbar">
                            <div className="gender-title">GENDER</div>
                            <div className="radio">
                                <input type="radio" name='gender' id='male' value="Male" onChange={handleGender} />
                                <label htmlFor="male" className='male'>
                                    <span className="label-text">Male</span>
                                </label>
                                <input type="radio" name='gender' id='female' value="Female" onChange={handleGender} />
                                <label htmlFor="female" className="female">
                                    <span className="label-text">Female</span>
                                </label>
                            </div>
                        </div>
                        <p style={{ color: "red", fontWeight: "bolder", marginTop: "0px" }} id='gender'>{genderError}</p>
                    </div>
                    <div>
                        <div className="radio-toolbar">
                            <div className="academics-title">Academics</div>
                            <div className="radio">
                                <input type="radio" name='academics' id='graduate' value="graduate" onChange={handleAcademic} />
                                <label htmlFor="graduate" className='male'>
                                    <span className="label-text">Graduate</span>
                                </label>
                                <input type="radio" name='academics' id='undergraduate' value="undergraduate" onChange={handleAcademic}/>
                                <label htmlFor="undergraduate" className="female">
                                    <span className="label-text">Undergraduate</span>
                                </label>
                            </div>
                        </div>
                        <p style={{ color: "red", fontWeight: "bolder", marginTop: "0px" }} id='academics'>{academicsError}</p>
                    </div>

                </div>

                <div className="birthday">
                    <DatePicker selected={date} onChange={date => setDate(date)} className="Datepicker"/>
                    <label htmlFor="birthday">
                        <div className="birthday-title">Date-of-birth</div>
                    </label>
                </div>
                <p style={{ color: "red", fontWeight: "bolder", marginTop: "0px" }}></p>
                <div className="terms">
                    <input type="checkbox" name="checkbox" className="checkbox" id="checkbox" onChange={handleCheckbox} />
                    <label htmlFor="checkbox">
                        <span className="terms-text">By sign up you agree to the terms and condition and privacy policy</span>
                    </label>
                </div>
                <p style={{ color: "red", fontWeight: "bolder", marginTop: "0px" }} id='checkbox-p'>{checkedError}</p>
                <div className="signup-page-btns">
                    <NavLink to='/signup'>
                        <button type="submit" className="signup" form='signup-form' onClick={handleSubmit}>Register</button>
                    </NavLink>
                    <NavLink to="/login">
                        <button className="login-btn">Login</button>
                    </NavLink>
                </div>
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
            <div className="bg"></div>
        </div>
    )
}

export default Register
