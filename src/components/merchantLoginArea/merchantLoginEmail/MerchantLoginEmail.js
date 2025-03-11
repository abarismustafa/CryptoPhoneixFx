import { useRef, useState } from "react";
import { userLogin, userLoginOtp } from "../../../api/login/Login";
import { SaveUserDeatilsLocalStorage, getUserTpinStatus, } from "../../../utils/localStorage";
import { resendOtpsloginForm } from "../../../api/login/Login";

import { useNavigate } from "react-router";
import { IoMdEye } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
// import { isValidNumber } from 'libphonenumber-js';
import { MdOutlineEmail } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import TermAndCondition from "../merchantLoginPhone/termAndCondition/TermAndCondition";
import VerifyOtp from "../merchantLoginPhone/verifyotp/VerifyOtp";
function MerchantLoginEmail({ setLoginForm }) {
    const [loader1, setloader2] = useState(false)

    const [PassWordError, setPassWordError] = useState()
    // console.log(PassWordError);

    const [isChecked, setIsChecked] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);


    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [logintoken, setLoginToken] = useState('')

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);


    const [initialValue, setInitialValue] = useState({
        entity: '',
        password: ''
    })
    const [radioSet, setRadioSet] = useState(false)

    const [errorValue, setErrorValue] = useState({})
    const [isFormValid, setIsFormValid] = useState(false);
    const [storedMobileNo, setStoredMobileNo] = useState('');
    const [closeotpmodal, handleClseOtpModal] = useState(false);
    const toastSuccessMessage = (str) => {
        toast.success(`${str}`, {
            position: "top-center",
        })
    };

    const toastSuccessMessageError = (str) => {
        toast.error(`${str}`, {
            position: "top-center",
        })
    };
    const validation = (values) => {
        const error = {}
        const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/

        if (!radioSet) {

        } else {
            if (!values.entity) {
                error.entity = "Email is required !";
            } else if (!email_pattern.test(values.entity)) {
                error.entity = 'Email is not correct'
            }
        }


        // else if (!regexEmail.test(values.email)) {
        //     error.email = "Invalid Email";
        // }
        if (!values.password) {
            error.password = "Password is Required!"

        }
        return error

    }
    const checkFormValidity = (errors, values) => {
        const isValid = Object.keys(errors).length === 0 &&
            values.entity && values.entity !== '+91' &&
            values.password &&
            (radioSet ? values.entity.includes('@') : values.entity.length === 13);
        setIsFormValid(isValid);
    }

    const handleUser = (e) => {
        const { name, value } = e.target;
        const newValues = { ...initialValue, [name]: value };
        setInitialValue(newValues);
        const newErrors = validation(newValues);
        setErrorValue(newErrors);
        checkFormValidity(newErrors, newValues);
    };



    const inputRef = useRef(null);











    const navigate = useNavigate()

    const [clicked, setclicked] = useState(false)


    const loginOtp = async (val) => {
        const obj = { user_id: window.localStorage.getItem('userIdToken'), otp: val.join('') }
        try {
            const res = await userLoginOtp(obj)

            if (res.statusCode == 200) {

                SaveUserDeatilsLocalStorage(res?.data?.user)

                getUserTpinStatus(res?.data?.Tpin_status)
                window.localStorage.setItem("regisNumber", res.data?.mobile);
                toastSuccessMessage(res?.data?.message || 'Login Successfully')
                setTimeout(() => {
                    navigate('/dashboard')
                    window.location.reload()
                }, 1000);

                // setTimeout(() => {
                //     if (res?.data?.is_approved === true && res?.data?.is_self_declare === true) {
                //         navigate('/home/playNif50')
                //     } else {
                //         navigate('/registrationComplete')
                //     }
                //     window.location.reload()
                // }, 1000);
                handleClose2();

            }
            else if (res.statusCode == 403) {
                toastSuccessMessageError(res?.message || "Otp not matched")
            }
            else {
                toastSuccessMessageError(res.message || "An error occurred")
            }
        } catch (error) {
            console.error("Error in loginOtp:", error);
            toastSuccessMessageError("An unexpected error occurred")
        }
    }


    const handleSubmit = async (event) => {
        // console.log(initialValue);
        setloader2(true)
        event.preventDefault()
        setclicked(true)
        setErrorValue(validation(initialValue))

        setIsFormSubmitted(true)
        if (!radioSet) {
            setStoredMobileNo(initialValue.entity);
        }
        try {
            const res = await userLogin(initialValue)
            SaveUserDeatilsLocalStorage(res?.data?.user)



            // console.log("logininfo", res);
            window.localStorage.setItem('openMenu', false)

            if (res.statusCode == 200) {
                setLoginToken(res?.data?.user);
                console.log("loginToken", res?.data?.user); // Log the token directly
                toastSuccessMessage('OTP Sent Successfully')

                // toastSuccessMessage('Login Successfully')

                // navigate('/registrationComplete')
                setTimeout(() => {
                    handleShow2()
                    // window.location.reload()
                }, 1000);

            }
            // if (res.statusCode == 403) {
            //     toastSuccessMessage(res.data.message)
            // }
            if (res.statusCode == 406) {
                toastSuccessMessageError("Please enter correct password")
                setPassWordError("Please enter correct password")
            }
            if (res.statusCode == 405) {
                toastSuccessMessageError("Email Id not register")
            }
            setloader2(false)
        } catch (error) {
            toastSuccessMessageError("Something went Wrong.")
            setloader2(false)
        }
        setclicked(false)
    }






    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        // console.log('fgfd', !showPassword);
        setShowPassword(!showPassword);
    };




    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    const isValidEmail = (email) => {
        const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
        return email_pattern.test(email);
    };

    /* const isValidMobile = (mobile) => {
        return mobile.length === ;
    }; */

    const isValidPassword = (password) => {
        return password.length !== 0;
    };


    const isFormValid2 = () => {
        return isValidEmail(initialValue.entity) &&
            isValidPassword(initialValue.password) &&
            isChecked &&
            (!radioSet || radioSet); // Ensures `radioSet` logic is considered
    };
    return (
        <>
            <ToastContainer className={"text-center"} />
            <div className="mobile-login-phone">
                <form action="" onSubmit={handleSubmit}>
                    <>
                        <div className="input-group  mb-2">
                            <span className="input-group-text" id="basic-addon1"><MdEmail /></span>
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className={`form-control ${initialValue?.entity && isValidEmail(initialValue.entity) ? 'is-valid' : ''}`}
                                ref={inputRef}
                                name="entity"
                                value={initialValue?.entity || ''}
                                onChange={(e) => handleUser(e, 'entity')}
                            />
                        </div>
                        <div id="emailHelp" className="form-text text-danger">{errorValue.entity}</div>
                    </>

                    <div className="input-group input-group-eye mb-2">
                        <span className="input-group-text" id="basic-addon1"><RiLockPasswordFill /></span>
                        <input type={showPassword ? 'text' : 'password'}
                            className={`form-control ${isValidPassword(initialValue.password) ? 'is-valid' : ''}`}
                            placeholder="Enter password" name="password" value={initialValue?.password} onChange={handleUser} />
                        <div className="eye mr-4" onClick={toggleShowPassword}>{showPassword ? <IoMdEye /> : <FaEyeSlash />} </div>
                    </div>
                    <div id="emailHelp" className="form-text text-danger">{PassWordError ? PassWordError : errorValue.password}</div>


                    <div className="term-condition mb-2">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="Remember" />
                            <label className="form-check-label" htmlFor="Remember">
                                Remember me
                            </label>
                        </div>
                    </div>

                    <div className="term-condition mb-2">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" onChange={handleCheckboxChange} isChecked={isChecked} />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                I have read and accepted
                            </label>

                        </div>

                        <span onClick={handleShow} style={{ cursor: 'pointer' }}>Term and Condition</span>
                    </div>
                    {isFormSubmitted && !isChecked && (
                        <p style={{ color: 'red' }}>Please accept the terms and conditions.</p>
                    )}

                    <div>
                        <button type="submit"
                            disabled={!isFormValid2() || loader1}
                            className={`w-100 commonButton ${!isFormValid2() ? ' not-allowed' : 'btn-login'}`}>
                            LOGIN
                            {loader1 && (
                                <div style={{ height: "16px", width: "16px" }} className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            )}
                        </button>
                    </div>
                </form>
                <div className="text-align-center mt-1">
                    <div onClick={() => setLoginForm(false)} style={{ cursor: 'pointer' }}>Forgot Password ?</div>
                    <div> Don't have an account? <Link to="/Signup">Sign up</Link> </div>
                </div>

            </div>

            <TermAndCondition handleClose={handleClose} show={show} />
            <VerifyOtp handleClose={handleClose2} show={show2} initialValue={initialValue} loginOtp={loginOtp} logintoken={logintoken} storedMobileNo={storedMobileNo} />
        </>
    )
}
export default MerchantLoginEmail