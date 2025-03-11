import { useState } from "react";
import MerchantLoginAreaBanner from "../../common/merchantLoginAreaBanner/MerchantLoginAreaBanner";
import MerchantLoginHeader from "../../common/merchantLoginHeader/MerchantLoginHeader";
import MerchantLoginEmail from "./merchantLoginEmail/MerchantLoginEmail";
import MerchantLoginForm from "./merchantLoginPhone/MerchantLoginPhone";
import TabMobileEmail from "./tabMobileEmail/TabMobileEmail";
import MerchantResetPassword from "./merchentResetPassword/MerchantResetPassword";
import {
  EmailGenerateOtp,
  emailGenerateOtp,
  isEmailExits,
  isMobileExits,
  mobileGenerateOtp,
} from "../../api/login/Login";
import { ToastContainer, toast } from "react-toastify";
import SliderLogin from "../../common/sliderLogin/SliderLogin";
// import paysathi from "../../asesets/banner/paysathi.png"
import Footer from "../footer/footer";
import MemberCodeLogin from "./memeberCodeLogin/MemberCodeLogin";

function MerchantLoginArea({ tokenNoti }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const tabs = [
    { id: 1, label: "Via Mobile" },
    { id: 2, label: "Via email" },
    { id: 3, label: "Via Member Code" },
  ];
  const [loader3, setloader3] = useState(false);

  const [buttonDisable, setButtonDisable] = useState(false);
  const [mobileMsg, setMobileMsg] = useState();
  const [activeTab, setActiveTab] = useState(1);
  const [loginForm, setLoginForm] = useState(true);
  const [count, setState] = useState(0);
  const handleTabClick = (tabId, i) => {
    setActiveTab(tabId);
    setState(i);
  };

  const [resetOtp, setResetOtp] = useState(true);
  const [OtpUp, setOtpUp] = useState(false);
  const [openReset, setOpenReset] = useState(false);

  const [initalValue, setInitialValue] = useState({
    mobileNo: "+91",
  });

  const [userId, setUserID] = useState();

  const handleChange = (e, str) => {
    if (str) {
      const input = e.target.value.replace(/[^0-9+]/g, "");
      const clone = { ...initalValue };
      const vlaue = input;
      const name = e.target.name;
      // console.log(clone.mobileNo?.length);
      clone[name] = vlaue;
      if (e.target.value.length == 2) {
        return;
      }
      // if (str) {
      //     setInitialValue(clone)
      //     return
      // }
      if (clone.mobileNo?.length == 14) {
        return;
      }
      setInitialValue(clone);
      if (clone.mobileNo?.length == 13) {
        // isMobileExit(clone.mobileNo)
      }
      return;
    }
    const regexEmail = e.target.value.replace(/\s/g, "");
    const clone = { ...initalValue };
    const vlaue = regexEmail;
    const name = e.target.name;
    clone[name] = vlaue;
    setInitialValue(clone);
    setButtonDisable(false);

    const verifyMobile = verifiedPhone(initalValue.mobileNo);
    // if (verifyMobile) {
    //     isMobileExit(initalValue.mobileNo)
    // }
  };

  // const handleCountryCode = (e) => {
  //     setCountryCode(e.target.value);
  //     const clone = { ...initalValue, mobileNo: e.target.value }
  //     setInitialValue(clone)

  // }

  const verifiedPhone = (input) => {
    const regexMobileNumber = /^[0-9]{10}$/;
    if (input.match(regexMobileNumber)) {
      return true;
    } else {
      return false;
    }
  };

  const isMobileExit = async (value) => {
    try {
      const res = await isMobileExits(value);
      if (res?.data?.isExist === false) {
        // alert('Mobile Number Does Not Exit')

        setMobileMsg("Mobile Number Does Not Exit");
        setButtonDisable(true);
      } else {
        setMobileMsg("");
        setButtonDisable(false);
      }
    } catch (error) {}
  };

  const isEmailExitt = async (value) => {
    try {
      const res = await isEmailExits(initalValue.emailId);
      if (res?.data?.isExist === false) {
        // alert('Email Does Not Exit')
        setMobileMsg("Email Does Not Exit");
        setButtonDisable(true);
      }
      if (res?.data?.isExist === true) {
        setMobileMsg("");
        setButtonDisable(false);
        EmailGenerateOtpMobile();
      }
    } catch (error) {}
  };

  const toastSuccessMessage = () => {
    toast.success(`OTP Sent Successfully.`, {
      position: "top-center",
    });
  };

  const [mobileError, setMobileError] = useState();
  const [panError, setpanError] = useState();

  const [emailError, setemailError] = useState();
  const [EmailpanError, setEmailpanError] = useState();

  const mobileGenerateOtpMobile = async (radioSet) => {
    const cloneMobile = {
      mobileNo: initalValue?.mobileNo,
      pan: initalValue?.pan,
    };
    const cloneMail = { emailId: initalValue?.emailId, pan: initalValue?.pan };

    if (radioSet) {
      setloader3(true);
      try {
        const res2 = await emailGenerateOtp(cloneMail);
        setUserID(res2?.data?.data?.user);
        window.localStorage.setItem("forgotUser", res2?.data?.data?.user);
        // console.log(res2.data.statusCode);
        if (res2?.data?.statusCode == 200) {
          toastSuccessMessage();
          handleShow();
          setTimeout(() => {
            // setResetOtp(false)
            // setOtpUp(true)
          }, 2000);
        }

        if (!cloneMail.emailId) {
          setemailError("Email is  Required!");
          // setpanError('Pan Number no is wrong')
        } else {
          setemailError("");
        }
        if (!cloneMail.pan) {
          setEmailpanError("Pan Number is Required!");
          // setMobileError(' mobile no is Required !')
        } else {
          setEmailpanError("");
        }

        if (res2?.data?.statusCode == 401) {
          setemailError("Email is wrong");
          setEmailpanError("Pan Number is wrong");
        }
        if (res2?.data?.statusCode == "402") {
          setEmailpanError("Pan Number is Worng!");
          // setemailError('')
        }
        setloader3(false);
      } catch (error) {
        setloader3(false);
      }
    } else {
      setloader3(true);
      try {
        const res = await mobileGenerateOtp(cloneMobile);

        setUserID(res?.data?.data?.user);

        window.localStorage.setItem("forgotUser", res?.data?.data?.user);
        // console.log(res.data.statusCode);
        if (res?.data?.statusCode == 200) {
          toastSuccessMessage();
          handleShow();
          setTimeout(() => {
            // setResetOtp(false)
            // setOtpUp(true)
          }, 2000);
        }

        if (cloneMobile.mobileNo?.length < 13) {
          setMobileError("mobile Number is Required !");
          // setpanError('Pan Number no is wrong')
        } else {
          setMobileError("");
        }
        if (!cloneMobile.pan) {
          setpanError("Pan Number  is Required !");
          // setMobileError(' mobile no is Required !')
        } else {
          setpanError("");
        }

        if (res?.data?.statusCode == 401) {
          setMobileError("Mobile number is wrong");
          setpanError("Pan Number is wrong");
        }
        if (res?.data?.statusCode == "402") {
          setpanError("Pan Number is wrong");
        }
        setloader3(false);
      } catch (error) {
        setloader3(false);
      }
    }
  };

  const EmailGenerateOtpMobile = async () => {
    const clone = { ...initalValue };
    try {
      const res = await EmailGenerateOtp(clone);
      setUserID(res?.data?.data?.user);
      window.localStorage.setItem("forgotUser", res?.data?.data?.user);
      // console.log(res.data.statusCode);
      if (res?.data?.statusCode == 200) {
        toastSuccessMessage();
        setTimeout(() => {
          setResetOtp(false);
          setOtpUp(true);
        }, 2000);
      }
    } catch (error) {}
  };

  const getOtp = (radioSet) => {
    console.log("mustafa");
    // if (radioSet) {
    //     isEmailExitt()
    // } else {
    //     mobileGenerateOtpMobile()
    // }

    mobileGenerateOtpMobile(radioSet);
  };

  return (
    <>
     
      {/* <MerchantLoginHeader loginFor={loginForm} handleSubmitBack={handleSubmitBack} /> */}

      {/* <MerchantLoginHeader /> */}
      {/* <MerchantLoginAreaBanner title="Merchant login" /> */}
      <div className="container-login100">
        <section className="my-4-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">{/* <SliderLogin /> */}</div>

              <div className="col-lg-6">
                {loginForm ? (
                  <>
                    <div className="login-area-sec m-0">
                      <div className="fisherman-content mb-2">
                        <h4>Login</h4>
                        <h3>Ready to log in</h3>
                        <p>
                          Ready to log in? Just enter your credentials and we'll
                          get you to your account in no time. Let's go!
                        </p>
                      </div>
                      <TabMobileEmail
                        tabs={tabs}
                        handleTabClick={handleTabClick}
                        count={count}
                        setState={setState}
                      />

                      {activeTab === 1 && (
                        <MerchantLoginForm setLoginForm={setLoginForm} />
                      )}

                      {activeTab === 2 && (
                        <MerchantLoginEmail setLoginForm={setLoginForm} />
                      )}

                      {activeTab === 3 && (
                        <MemberCodeLogin setLoginForm={setLoginForm} />
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="login-area-sec m-0">
                      <h1 className="text-align-center">{"FORGOT PASSWORD"}</h1>
                      <MerchantResetPassword
                        // handleSubmitBack={handleSubmitBack}
                        resetOtp={resetOtp}
                        getOtp={getOtp}
                        OtpUp={OtpUp}
                        openReset={openReset}
                        handleChange={handleChange}
                        initalValue={initalValue}
                        userId={userId}
                        setOtpUp={setOtpUp}
                        setOpenReset={setOpenReset}
                        setLoginForm={setLoginForm}
                        setInitialValue={setInitialValue}
                        buttonDisable={buttonDisable}
                        mobileMsg={mobileMsg}
                        setButtonDisable={setButtonDisable}
                        setMobileMsg={setMobileMsg}
                        mobileError={mobileError}
                        panError={panError}
                        emailError={emailError}
                        EmailpanError={EmailpanError}
                        loader3={loader3}
                        show={show}
                        handleClose={handleClose}
                        setResetOtp={setResetOtp}
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          {/* <ToastContainer /> */}
        </section>
      </div>
      {/* <Footer /> */}
    </>
  );
}
export default MerchantLoginArea;
