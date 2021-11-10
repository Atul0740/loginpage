import React, { useEffect, useState } from 'react'
import './Master.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Master = () => {
    const signUpButton = () => {
        let container = document.getElementById('container');
        container.classList.add('right-panel-active');
    };
    const signInButton = () => {
        let container = document.getElementById('container');
        container.classList.remove('right-panel-active');
    };
    const [email, setemail] = useState("")
    const [emailError, setemailError] = useState('.')
    const [passwordError, setpasswordError] = useState('.')
    const [password, setpassword] = useState("")
    const handleemails = (e) => {
        setemail(e.target.value);
        setemailError('.');
        document.getElementById('email-errp').style.visibility = 'hidden';
    };
    const handlepasswords = (e) => {
        setpassword(e.target.value);
        setpasswordError('.');
        document.getElementById('pass-errp').style.visibility = 'hidden';
        document.getElementById('eye').style.display='block'
    };
    useEffect(() => {
        let label = document.getElementById('email-labelled');
        let input = document.getElementById('input-email');

        if (email === "") {
            label.classList.remove('label-focussed');
            input.classList.remove('outfocus');
            input.classList.add('infocus')
        }
        else {
            label.classList.add('label-focussed');
            input.classList.add('outfocus');
            input.classList.remove('infocus')
        }
    }, [email])

    useEffect(() => {
        let label = document.getElementById('password-labelled');
        let input = document.getElementById('input-password');

        if (password === "") {
            label.classList.remove('label-focussed');
            input.classList.remove('outfocus');
            input.classList.add('infocus')
            document.getElementById('eye').style.display='none'
        }
        else {
            label.classList.add('label-focussed');
            input.classList.add('outfocus');
            input.classList.remove('infocus')
            document.getElementById('eye').style.display='block'
        }
    }, [password])
    const valid = () => {
        if (email === '' || password === '') {
            if (email === '') {
                setemailError('Please Enter Email')
                document.getElementById('email-errp').style.visibility = 'visible';
            }
            if (password === '') {
                setpasswordError('Please Enter Password')
                document.getElementById('pass-errp').style.visibility = 'visible';
            }
            return false;
        }
        if (email.includes('@') && email.includes('.'));
        else {
            setemailError('Enter Valid Email')
            document.getElementById('email-errp').style.visibility = 'visible';
            return false;
        }
        return true;
    }
    const HandleSubmit = (e) => {
        e.preventDefault();
        if (valid()) {
            setemail('');
            setpassword('')
            document.getElementById('eye').style.display='none'
        }
    }
    const [name, setname] = useState("")
    const [username, setusername] = useState("")
    const [referral, setreferral] = useState("")
    const [emails, setemails] = useState("")
    const [passwords, setpasswords] = useState("")
    const [nameError, setnameError] = useState('.')
    const [usernameError, setusernameError] = useState('.')
    const [emailErrors, setemailErrors] = useState('.')
    const [passwordErrors, setpasswordErrors] = useState('.')
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
        setemails(e.target.value);
        setemailErrors('.')
        document.getElementById('email-p').style.visibility = 'hidden'
    };
    const handlepassword = (e) => {
        setpasswords(e.target.value);
        setpasswordErrors('.')
        document.getElementById('pass-p').style.visibility = 'hidden'
        document.getElementById('eyes').style.display='block'
    };
    const handlereferral = (e) => {
        setreferral(e.target.value);
    };
    const handleGender = (e) => {
        setgender(e.target.value);
        setgenderError('.');
        document.getElementById('gender').style.visibility = 'hidden'
    }
    const handleAcademic = (e) => {
        setacademics(e.target.value);
        setacademicsError('.');
        document.getElementById('academics').style.visibility = 'hidden'
    }
    const handleCheckbox = (e) => {
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
        let input1 = document.getElementById('sig-name');
        let input2 = document.getElementById('sig-user');
        let input3 = document.getElementById('sig-email');
        let input4 = document.getElementById('sig-pass');
        let input5 = document.getElementById('sig-ref');
        if (name === "") {
            label1.classList.remove('labels-focussed');
            input1.classList.remove('outfocus');
            input1.classList.add('infocus')
        }
        else {
            label1.classList.add('labels-focussed');
            input1.classList.add('outfocus');
            input1.classList.remove('infocus')
        }
        if (username === "") {
            label2.classList.remove('labels-focussed');
            input2.classList.remove('outfocus');
            input2.classList.add('infocus')
        }
        else {
            label2.classList.add('labels-focussed');
            input2.classList.add('outfocus');
            input2.classList.remove('infocus')
        }
        if (emails === "") {
            label3.classList.remove('labels-focussed');
            input3.classList.remove('outfocus');
            input3.classList.add('infocus')
        }
        else {
            label3.classList.add('labels-focussed');
            input3.classList.add('outfocus');
            input3.classList.remove('infocus')
        }
        if (passwords === "") {
            label4.classList.remove('labels-focussed');
            input4.classList.remove('outfocus');
            input4.classList.add('infocus');
            document.getElementById('eyes').style.display='none'
        }
        else {
            label4.classList.add('labels-focussed');
            input4.classList.add('outfocus');
            input4.classList.remove('infocus')
            document.getElementById('eyes').style.display='block'
        }
        if (referral === "") {
            label5.classList.remove('labels-focussed');
            input5.classList.remove('outfocus');
            input5.classList.add('infocus')
        }
        else {
            label5.classList.add('labels-focussed');
            input5.classList.add('outfocus');
            input5.classList.remove('infocus')
        }
    }, [name, username, emails, passwords, referral, gender])
    const [eye, seteye] = useState(false)
    const handleeye = () => {
        seteye(!eye)
    }
    useEffect(() => {
        if(eye){
            document.getElementById('password').type='text'
            document.getElementById('passwords').type='text'
        }
        else{
            document.getElementById('password').type='password'
            document.getElementById('passwords').type='password'
        }
    }, [eye])
    const valid2 = () => {
        if (name === '' || username === '' || emails === '' || passwords === '' || gender === '' || academics === '' || checkbox === false) {
            if (name === '') {
                setnameError('Please Enter Name');
                document.getElementById('name-p').style.visibility = 'visible'
            }
            if (username === '') {
                setusernameError('Please Enter Username');
                document.getElementById('user-p').style.visibility = 'visible'
            }
            if (emails === '') {
                setemailErrors('Please Enter Email');
                document.getElementById('email-p').style.visibility = 'visible'
            }
            if (passwords === '') {
                setpasswordErrors('Please Enter Password');
                document.getElementById('pass-p').style.visibility = 'visible'
            }
            if (gender === '') {
                setgenderError('Please Select Gender');
                document.getElementById('gender').style.visibility = 'visible'
            }
            if (academics === '') {
                setacademicsError('Please Select Academics');
                document.getElementById('academics').style.visibility = 'visible'
            }
            if (checkbox === false) {
                setcheckedError('Please Check this box');
                document.getElementById('checkbox-p').style.visibility = 'visible'
            }
            return false;
        }
        if (emails.includes('@') && emails.includes('.'));
        else {
            setemailErrors('Enter Valid Email');
            document.getElementById('email-p').style.visibility = 'visible'
            return false;
        }
        return true;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (valid2()) {
            setname('')
            setusername('')
            setemails('')
            setpasswords('')
            setreferral('')
            setgender('')
            setacademics('');
            setcheckbox(false)
            document.querySelector('input[type=radio][name=gender]:checked').checked = false;
            document.querySelector('input[type=radio][name=academics]:checked').checked = false;
            document.querySelector('input[type=checkbox]:checked').checked = false;
            document.getElementById('eyes').style.display='none'
        }
    };
    return (
        <div className="container" id="container">
            <div className="form-container sign-in-container">
                <div className='form'>
                    <div className='logo'> <a href="https://www.thesocialcomment.com/">thesocialcomment</a> </div>
                    <h1>Login</h1>
                    <div className="input-content" id='input-email'>
                        <i class="fa fa-envelope"></i>
                        <input type="email" id='email' value={email} style={{ marginBottom: "0px", marginTop: "0px" }} autoComplete="off" onChange={handleemails} />
                        <label className="login-label" id='email-labelled' htmlFor='email'>Email</label>
                    </div>
                    <p style={{ marginBottom: "5px", marginTop: "0px", color: "red", fontWeight: "bolder", alignSelf: "flex-start" }} id='email-errp'>{emailError}</p>
                    <div className="input-content" id='input-password'>
                        <i class="fa fa-lock"></i>
                        <input type="password" id='password' value={password} style={{ marginBottom: "0px", marginTop: "0px" }} autoComplete="new-password" onChange={handlepasswords} />
                        <label className="login-label" id='password-labelled' htmlFor='password'>Password</label>
                        <i class="far fa-eye" id="eye" onClick={handleeye} style={{display:"none"}}></i>
                    </div>
                    <p style={{ marginBottom: "0px", marginTop: "0px", color: "red", fontWeight: "bolder", alignSelf: "flex-start" }} id='pass-errp'>{passwordError}</p>
                    <a href="/" style={{ marginBottom: "0px", marginTop: "0px", alignSelf: "flex-start", color: "blue" }}>Forgot your password?</a>
                    <button style={{ marginTop: "10px" }} type='submit' onClick={HandleSubmit}>Login</button>
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
            </div>
            <div className="form-container sign-up-container" id='sign-up-container'>
                <div className='form'>
                    <div className='logo'> <a href="https://www.thesocialcomment.com/">thesocialcomment</a> </div>
                    <h1>Create Account</h1>
                    <div className="names">
                        <div>
                            <div className="input-content" id='sig-name'>
                                <input type="text" id='name' style={{ marginBottom: "0px", marginTop: "0px" }} autoComplete="off" onChange={handlename} value={name} />
                                <label className="signup-label" htmlFor='name' id='name-label'>Name</label>
                            </div>
                            <p style={{ marginBottom: "0px", marginTop: "0px", color: "red", fontWeight: "bolder", alignSelf: "flex-start" }} id='name-p'>{nameError}</p>
                        </div>
                        <div>
                            <div className="input-content" id='sig-user'>
                                <input type="text" style={{ marginBottom: "0px", marginTop: "0px" }} id='username' autoComplete="off" onChange={handleusername} value={username} />
                                <label className="signup-label" htmlFor='username' id='username-label'>Username</label>
                            </div>
                            <p style={{ marginBottom: "0px", marginTop: "0px", color: "red", fontWeight: "bolder", alignSelf: "flex-start" }} id='user-p'>{usernameError}</p>
                        </div>
                    </div>
                    <div className="names">
                        <div>
                            <div className="input-content" id='sig-email'>
                                <input type="email" id='emails' style={{ marginBottom: "0px", marginTop: "0px" }} autoComplete="off" onChange={handleemail} value={emails} />
                                <label className="signup-label" htmlFor='emails' id='email-label'>Email</label>
                            </div>
                            <p style={{ marginBottom: "0px", marginTop: "0px", color: "red", fontWeight: "bolder", alignSelf: "flex-start" }} id='email-p'>{emailErrors}</p>
                        </div>
                        <div>
                            <div className="input-content" id='sig-pass'>
                                <input type="password" id='passwords' style={{ marginBottom: "0px", marginTop: "0px" }} autoComplete="new-password" onChange={handlepassword} value={passwords} />
                                <label className="signup-label" htmlFor='passwords' id='password-label'>Password</label>
                                <i class="far fa-eye" id="eyes" onClick={handleeye} style={{marginRight:"10px",display:"none"}}></i>
                            </div>
                            <p style={{ marginBottom: "0px", marginTop: "0px", color: "red", fontWeight: "bolder", alignSelf: "flex-start" }} id='pass-p'>{passwordErrors}</p>
                        </div>
                    </div>
                    <div className="input-content" id='sig-ref'>
                        <input type="text" id='refer' style={{ marginBottom: "0px", marginTop: "0px" }} autoComplete="new-password" onChange={handlereferral} value={referral} />
                        <label className="signup-label" htmlFor='refer' id='referral-label'>Referral</label>
                    </div>
                    <div className="radio-btn">
                        <div style={{ marginBottom: "0px", marginTop: "0px" }}>
                            <div className="gender infocus" >
                                <span>GENDER</span>
                                <div class="radio-toolbar">
                                    <input type="radio" id="male" name="gender" value="male" onChange={handleGender} />
                                    <label for="male" className='infocus'>Male</label>
                                    <input type="radio" id="female" name="gender" value="female" onChange={handleGender} />
                                    <label for="female" className='infocus'>Female</label>
                                </div>
                            </div>
                            <p style={{ marginBottom: "0px", marginTop: "0px", color: "red", fontWeight: "bolder", alignSelf: "flex-start" }} id='gender'>{genderError}</p>
                        </div>

                        <div style={{ marginBottom: "0px", marginTop: "0px" }}>
                            <div className="gender infocus" >
                                <span>ACADEMICS</span>
                                <div class="radio-toolbar">
                                    <input type="radio" id="graduate" name="academics" value="graduate" onChange={handleAcademic} />
                                    <label for="graduate" className='infocus'>Graduate</label>
                                    <input type="radio" id="undergraduate" name="academics" value="undergraduate" onChange={handleAcademic} />
                                    <label for="undergraduate" className='infocus'>Undergraduate</label>
                                </div>
                            </div>
                            <p style={{ marginBottom: "0px", marginTop: "0px", color: "red", fontWeight: "bolder", alignSelf: "flex-start" }} id='academics'>{academicsError}</p>
                        </div>

                    </div>
                    <div className="birthday infocus">
                        <div className="birthday-title">Date-of-birth</div>
                        <DatePicker selected={date} onChange={date => setDate(date)} className="Datepicker" />
                    </div>
                    <div className="terms" style={{ marginBottom: "0px", marginTop: "0px" }}>
                        <input type="checkbox" name="checkbox" className="checkbox" id="checkbox" onChange={handleCheckbox} />
                        <label htmlFor="checkbox">
                            <span className="terms-text">By sign up you agree to the terms and condition and privacy policy</span>
                        </label>
                    </div>
                    <p style={{ marginBottom: "0px", marginTop: "0px", color: "red", fontWeight: "bolder", alignSelf: "flex-start" }} id='checkbox-p'>{checkedError}</p>
                    <button style={{ marginTop: "10px", marginBottom: "50px" }} type='submit' onClick={handleSubmit} >Register</button>
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
                </div>

            </div>

            <div className="overlay-container" id='overlay-container'>
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <div className="text-con">
                            <h1>Welcome Back!</h1>
                            <p style={{fontWeight:"bolder"}}>Create-Share-Explore-Grow with us</p>
                            <button className="ghost" id="signIn" onClick={signInButton}>Login</button>
                        </div>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <div className="text-con">
                            <h1>Hello, Friend!</h1>
                            <p style={{fontWeight:"bolder"}}>Start building up your community and get ahead of the crowd</p>
                            <button className="ghost" id="signUp" onClick={signUpButton}>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Master
