import { useEffect, useState } from "react";
import { Getprofile, cloudImage, countryGet, currencyListMain, languageGet, updateProfilee } from "../../../api/login/Login";
import { ToastContainer, toast } from "react-toastify";
import { FaCamera } from "react-icons/fa";
import { BiCamera } from "react-icons/bi";
import { Link } from "react-router-dom";
import InvetationModal from "../profilePage/InvetationModal/InvetationModal";
import { baseUrlImage } from "../../../baseUrl";

function Profile() {
    const [loader1, setloader1] = useState(false)
    const [country, setCountry] = useState()
    const [currency, setCurrency] = useState(null)
    // console.log(currency);

    const [language, setLanguage] = useState()
    const [profileImage, setProfileImage] = useState()
    const [modalShow, setModalShow] = useState(false);
    // console.log(profileImage);
    const [data, setData] = useState()
    // console.log(data?.refer_id);

    const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    const qrModal = () => {
        setModalShow(true)
    }

    const [initialValues, setInitialValues] = useState({
        name: "",
        email: "",
        mobile: '',
        language_id: '',
        profile: '',
        country: '',
        user_id: '',
        alternate_mobileNo: '',
        state: '',
        country: '',
        presentAddr: '',
        educationQualification: '',
        pinCode: '',
        locking_amt: '',
        currency_id: '',
    });

    const handleChange = (e) => {
        const clone = { ...initialValues }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setInitialValues(clone)

    }

    const getCountry = async () => {
        const res = await countryGet()
        setCountry(res?.data?.data)
    }
    const getLanguage = async () => {
        try {
            const res = await languageGet();
            setLanguage(res?.data?.data);

            const resCurrency = await currencyListMain();
            setCurrency(resCurrency?.data);

            // Set default currency_id if needed
            if (resCurrency?.data?.length > 0) {
                setInitialValues((prev) => ({
                    ...prev,
                    currency_id: resCurrency.data[0]._id,
                }));
            }
        } catch (error) {
            console.error(error);
        }
    };


    const imgs = new FormData();
    const [errorMessage, setErrorMessage] = useState('');
    console.log(errorMessage);
    const [imgss, setImgss] = useState(data?.profile)
    // console.log(imgss);
    const colodinaryImage = async (e) => {
        setProfileImage(e.target.files[0])
        imgs.append("image", e.target.files[0]);
        const allowedTypes = [
            'video/mp4',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'application/vnd.ms-excel',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'application/pdf',
            'application/x-rar-compressed',
            'application/x-zip-compressed',
            'application/zip'
        ];
        // console.log(e.target.files[0].type);
        if (e.target.files[0] && allowedTypes.includes(e.target.files[0].type)) {
            // setProfileImage(e.target.files[0])
            setErrorMessage('Invalid file type. Please select a valid file.');
        } else {
            setProfileImage(e.target.files[0])
            setErrorMessage('');
            try {
                const res = await cloudImage(imgs)


                setTimeout(() => {
                    setImgss(res?.data?.data?.url)
                    if (res.data.error == false) {
                        updateProfile(res?.data?.data?.url)
                    }
                }, 1000);
            } catch (error) {

            }
        }

    }
    console.log(imgss);

    const toastSuccessMessage = (message) => {
        toast.success(`${message}`, {
            position: "top-center",
        });
    };
    const toastSuccessMessage2 = (message) => {
        toast.error(`${message}`, {
            position: "top-center",
        });
    };


    const updateProfile = async (url) => {
        // console.log('hjkhk', url);
        setloader1(true)
        const clone = { ...initialValues, profile: url ? url : imgss, user_id: window.localStorage.getItem('userIdToken') }
        // console.log(clone);
        try {
            const res = await updateProfilee(clone)
            if (res?.status == '200') {
                toastSuccessMessage(res.data.message)
            }
            if (res?.data?.error == true) {
                toastSuccessMessage2(res.data.message)
            }
            // console.log(res);
            setloader1(false)
        } catch (error) {
            setloader1(false)
        }
    }

    const getDataProfile = async () => {
        try {
            const res = await Getprofile()
            setData(res?.data?.data)
        } catch (error) {

        }
    }

    useEffect(() => {
        getCountry()
        getLanguage()
        getDataProfile()
    }, [])

    useEffect(() => {
        const ob = {
            name: data?.name,
            email: data?.email,
            mobile: data?.mobile,
            language_id: data?.language_id,
            country: data?.country,
            profile: data?.profile,
            state: data?.state,
            presentAddr: data?.presentAddr,
            educationQualification: data?.educationQualification,
            pinCode: data?.pinCode,
            // locking_amt: data?.locking_amt
        }
        setInitialValues(ob)
        setImgss(data?.profile)
        // console.log(data?.profile);
    }, [data])



    const [copied, setCopied] = useState(false);  // To show feedback

    // Function to copy referral code to the clipboard
    const handleCopyClick = (referralCode) => {
        navigator.clipboard.writeText(referralCode)
            .then(() => {
                setCopied(true);  // Set feedback
                setTimeout(() => setCopied(false), 2000); // Reset feedback after 2 seconds
            })
            .catch((err) => {
                console.error('Failed to copy: ', err); // Handle errors
            });
    };


    return (
        <>
            <div className="PageHeading"><h1>Update Profile</h1></div>
            <div className="ContentArea">
                <div className="card">
                    <div className="card-header setmate">
                        <div ><span>Update Profile Area</span></div>
                        <div >
                            {/* <span>
                                
                                <button onClick={() => handleCopyClick(data?.refer_id)} className="btn btn-success me-3">
                                    {copied ? 'Copied!' : 'Copy Referral Code'}
                                </button></span> */}
                            <span>
                                {data?.user_type_id?.user_type} / Referral  code - {data?.refer_id}
                                {/* <Link className="btn btn-primary ml-2" to={`https://customer.playnif50.com/signup/${data?.refer_id}`} target="_blank">
                                    Invitation Link
                                </Link> */}

                            </span>
                            <button type="button" className="btn btn-primary" onClick={qrModal}>Referral code</button>
                        </div>
                        {/* {copied && <p style={{ color: 'green' }}>Referral code copied!</p>} */}
                    </div>
                    <div className="card-body card-body_body bg-white">
                        <form action="#" id="frmCallAction">

                            <div className="form-row" style={{ alignItems: 'end' }}>
                                <div className="col-lg-12">
                                    <div className="main-img-div" style={{ position: 'relative', textAlign: 'center' }}>
                                        {/* <div className="avatar-upload">
                                            {!imgss ? <>
                                                <img id="avatar-image" src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="Profile Picture" />
                                            </> :

                                                <> <div className="box-imag">
                                                    <img src={`https://api.paypandabnk.com/api/cloudinary/${imgss}`} style={{ width: '100%', borderRadius: '100%' }} alt="" />
                                                    {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                                                </div></>
                                            }


                                            <input type="file" id="avatar-input" accept="image/*" onChange={colodinaryImage} />
                                            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}



                                        </div> */}
                                        {/* <FaCamera id="avatar-input" accept="image/*" /> */}
                                        <div className="profile-container">
                                            {!imgss ? <>
                                                <img id="avatar-image" src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="Profile Picture" onClick={toggleModal} />
                                            </> :

                                                <> <div className="box-imag">
                                                    <img src={`${baseUrlImage}${imgss}`} style={{ width: '100%', borderRadius: '100%' }} alt="" onClick={toggleModal} />

                                                </div></>
                                            }
                                            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                                            <div className="edit-options">
                                                <label htmlFor="file-upload" className="edit-icon">
                                                    <BiCamera className="text-white" /> {/* Edit icon */}
                                                </label>
                                                <input id="file-upload" type="file" style={{ display: 'none' }} accept="image/*" onChange={colodinaryImage} />
                                            </div>
                                        </div>

                                        {isModalOpen && (
                                            <div className="modall" onClick={toggleModal}>
                                                <span className="close">&times;</span>
                                                <img className="modal-content" src={`https://api.paypandabnk.com/api/cloudinary/${imgss}`} alt="Profile Large" />
                                            </div>
                                        )}

                                    </div>





                                </div>
                                <div className="form-group col-lg-6 col-md-12">
                                    <label htmlFor="txtNumId">Name</label>
                                    <input className="form-control" id="txtNumId" disabled name="name" type="text" value={initialValues.name} placeholder="Enter Name" onChange={handleChange} />
                                </div>
                                {/* <div className="form-group col-lg-3 col-md-6 col-sm-12">
                                    <img src={`https://api.paypandabnk.com/api/cloudinary/${imgss}`} style={{ width: '40%', height: '100px' }} alt="" />
                                    {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                                </div>
                                <div className="form-group col-lg-3 col-md-6 col-sm-12">
                                    <label htmlFor="txtNumId">Profile Image</label>

                                    <input className="form-control" id="txtNumId" name="txtNumId" type="file" placeholder="Profile Image" onChange={colodinaryImage} />
                                </div> */}
                                <div className="form-group col-lg-6 col-md-12">
                                    <label htmlFor="txtNumId">Email</label>
                                    <input className="form-control" id="txtNumId" disabled name="email" type="email" value={initialValues.email} placeholder="Enter Email" onChange={handleChange} />
                                </div>
                                <div className="form-group col-lg-6 col-md-12">
                                    <label htmlFor="txtNumId">Mobile Number</label>
                                    <input className="form-control" id="txtNumId" disabled name="mobile" type="text" value={initialValues.mobile} placeholder="Enter Mobile Number" onChange={handleChange} />
                                </div>
                                {/* <div className="form-group col-lg-6 col-md-12">
                                    <label htmlFor="txtNumId">Locked Amount</label>
                                    <input className="form-control" id="txtNumId" disabled name="locking_amt" type="text" value={initialValues.locking_amt} placeholder="Enter Locked Amount" onChange={handleChange} />
                                </div> */}
                                {/* <div className="form-group col-lg-6 col-md-12">
                                    <label htmlFor="txtNumId">Alternate Mobile Number</label>
                                    <input className="form-control" id="txtNumId" disabled name="alternate_mobileNo " type="text" value={initialValues.alternate_mobileNo} placeholder="Enter Mobile Number" onChange={handleChange} />
                                </div> */}
                                <div className="form-group col-lg-6 col-md-12">
                                    <label htmlFor="txtNumId">Education Qualification </label>
                                    <input className="form-control text-uppercase" id="txtNumId" name="educationQualification " type="text" value={initialValues.educationQualification} placeholder="Enter Education Qualification" onChange={handleChange} />
                                </div>
                                <div className="form-group col-lg-6 col-md-12">
                                    <label htmlFor="txtNumId">Present Address </label>
                                    <input className="form-control" id="txtNumId" disabled name="presentAddr " type="text" value={initialValues.presentAddr} placeholder="Enter Present Address " onChange={handleChange} />
                                </div>
                                <div className="form-group col-lg-6 col-md-12">
                                    <label htmlFor="txtNumId">State  </label>
                                    <input className="form-control" id="txtNumId" disabled name="state" type="text" value={initialValues.state} placeholder="Enter State" onChange={handleChange} />
                                </div>
                                {/* <div className="form-group col-lg-6 col-md-12">
                                    <label htmlFor="txtNumId">Country </label>
                                    <input className="form-control" id="txtNumId" disabled name="country" type="text" value={initialValues.country} placeholder="Enter Mobile Number" onChange={handleChange} />
                                </div> */}
                                <div className="form-group col-lg-6 col-md-12">
                                    <label htmlFor="txtNumId">Pin Code </label>
                                    <input className="form-control" id="txtNumId" disabled name="pinCode" type="text" value={initialValues.pinCode} placeholder="Enter Pin Code" onChange={handleChange} />
                                </div>


                                {/* <div className="form-group col-lg-3 col-md-6 col-sm-12">
                                    <label htmlFor="txtNumId">Country</label>
                                    <select class="form-select" aria-label="Default select example" name="country" value={initialValues?.country} onChange={handleChange}>
                                        <option selected>Select Country</option>
                                        {country && country?.map((item) => {
                                            return <option value={item?._id}>{item?.name}</option>
                                        })}

                                    </select>
                                </div> */}
                                <div className="form-group col-lg-6 col-md-12">
                                    <label htmlFor="txtNumId">Language</label>
                                    <select class="form-select" aria-label="Default select example" name="language_id" value={initialValues.language_id} onChange={handleChange}>
                                        <option selected>Select Language</option>
                                        {language && language?.map((item) => {
                                            return <option value={item?._id}>{item?.name}</option>
                                        })}
                                    </select>
                                </div>
                                <div className="form-group col-lg-6 col-md-12">
                                    <label htmlFor="txtNumId">Currency</label>
                                    <select
                                        className="form-select"
                                        aria-label="Default select example"
                                        name="currency_id"
                                        value={initialValues.currency_id} 
                                        onChange={handleChange}
                                    >
                                        <option value="" disabled>
                                            Select Currency
                                        </option>
                                        {currency &&
                                            currency.map((item) => (
                                                <option value={item?._id} key={item?._id}>
                                                    {item?.currency_name}
                                                </option>
                                            ))}
                                    </select>
                                </div>

                                <div className="form-group col-md-12 text-align-center">
                                    <label>&nbsp;</label>
                                    <button type="button" id="btnSearch" className="btn btn-primary" onClick={() => updateProfile()}>
                                        Profile Update
                                        {
                                            loader1 && <div style={{ height: "16px", width: "16px" }} className="spinner-border" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                        }
                                    </button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
                <ToastContainer />
                <InvetationModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    refer_id={data?.refer_id}
                    handleCopyClick={handleCopyClick}
                    copied={copied}
                />
            </div >

        </>
    )
}
export default Profile