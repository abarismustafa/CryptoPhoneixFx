

import { FaAngleDoubleUp } from "react-icons/fa";
import '../staffKyc/staffKyc.css'
import { baseUrlImage } from "../../../baseUrl";
import { useEffect, useState } from "react";
import { addStaffKycDoc, cloudImage, staffKycDocGet } from "../../../api/login/Login";
import { toastSuccessMessage } from "../../../common/tostShow/TostShow";
import { toastErrorMessage } from "../../compeleteRegister/ToastShare";
import { ToastContainer } from "react-toastify";
const StaffKyc = () => {

    const [initialValues, setInitialValues] = useState({
        adhaar_front_card: "",
        adhaar_back_card: "",
        pan_card: "",
        bank_proof: "",
        kyc_video: "",
        // is_approved: "",
        latitude: null,
        longitude: null,
    });

    


    const [imagePreviews, setImagePreviews] = useState({
        adhaar_front_card: "",
        adhaar_back_card: "",
        pan_card: "",
        bank_proof: "",
        kyc_video: "",
        latitude: null,
        longitude: null,
    });

    // console.log(imagePreviews);




    const imgs = new FormData();
    const [errorMessage, setErrorMessage] = useState('');
    // console.log(errorMessage);
    const [imgss, setImgss] = useState()
    const [profileImage, setProfileImage] = useState()
    // console.log(profileImage);
    // const [imgss, setImgss] = useState(data?.profile)

    // console.log(imgss);
    const colodinaryImage = async (e, field) => {
        // // setProfileImage(e.target.files[0])
        // imgs.append("image", e.target.files[0]);
        // const allowedTypes = [
        //     'video/mp4',
        //     'application/msword',
        //     'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        //     'application/vnd.ms-excel',
        //     'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        //     'application/pdf',
        //     'application/x-rar-compressed',
        //     'application/x-zip-compressed',
        //     'application/zip'
        // ];
        // // console.log(e.target.files[0].type);
        // if (e.target.files[0] && allowedTypes.includes(e.target.files[0].type)) {
        //     // setProfileImage(e.target.files[0])
        //     setErrorMessage('Invalid file type. Please select a valid file.');
        // } else {
        //     setProfileImage(e.target.files[0])
        //     setErrorMessage('');
        //     try {
        //         const res = await cloudImage(imgs)
        //         setTimeout(() => {
        //             setImgss(res?.data?.data?.url)
        //             // if (res.data.error == false) {
        //             //     updateProfile(res?.data?.data?.url)
        //             // }
        //         }, 1000);
        //     } catch (error) {

        //     }
        // }



        const file = e.target.files[0];
        const allowedTypes = [
            // 'video/mp4',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'application/vnd.ms-excel',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'application/pdf',
            'application/x-rar-compressed',
            'application/x-zip-compressed',
            'application/zip'
        ];

        // Checking if the file type is valid
        if (file && allowedTypes.includes(file.type)) {
            setErrorMessage('Invalid file type. Please select a valid image.');
            return;
        }

        // If valid image, preview it
        const previewUrl = URL.createObjectURL(file);
        setImagePreviews(prev => ({
            ...prev,
            [field]: previewUrl
        }));

        setErrorMessage('');

        // Upload to Cloudinary (simulated with the cloudImage function)
        const formData = new FormData();
        formData.append("image", file);
        try {
            const res = await cloudImage(formData);
            const imageUrl = res?.data?.data?.url;
            // Set the uploaded image URL to the state

            setTimeout(() => {
                setInitialValues(prev => ({
                    ...prev,
                    [field]: imageUrl
                }));
            }, 1000)


        } catch (error) {
            console.error("Error uploading image:", error);
            toastErrorMessage("Image upload failed");
        }

    }


    const [geoError, setGeoError] = useState(null);

    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    // Successfully got position
                    setInitialValues(prevState => ({
                        ...prevState,
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    }));
                },
                (error) => {
                    // Handle the error
                    switch (error.code) {
                        case error.PERMISSION_DENIED:
                            setGeoError("User denied the request for Geolocation.");
                            break;
                        case error.POSITION_UNAVAILABLE:
                            setGeoError("Location information is unavailable.");
                            break;
                        case error.TIMEOUT:
                            setGeoError("The request to get user location timed out.");
                            break;
                        default:
                            setGeoError("An unknown error occurred.");
                            break;
                    }
                }
            );
        } else {
            setGeoError('Geolocation is not available in this browser.');
        }
    }, []);


    const submitForm = async (e) => {
        e.preventDefault();
        const docsObj = {
            ...initialValues,
            // adhaar_back_card: initialValues.adhaar_back_card,
            // adhaar_front_card: initialValues.adhaar_front_card,
            // pan_card: initialValues.pan_card,
            // bank_proof: initialValues.bank_proof,
            // kyc_video: initialValues.kyc_video
        };
        // console.log(docsObj);
        try {
            const res = await addStaffKycDoc(docsObj);
            if (res?.data?.error == false) {
                toastSuccessMessage(res?.data?.message);
                // setError(false)

                // navigate('/path-to-redirect');
            } else {
                toastErrorMessage(res?.data?.message);
            }
        } catch (error) {
            toastErrorMessage();
            console.error("Error:", error);
        }
    };

    const [imageData, setImageData] = useState(null)
    // console.log(imageData);

    const imagegetData = async () => {
        try {
            const res = await staffKycDocGet()
            setImageData(res?.data?.data);

            setInitialValues(res?.data?.data?.StaffDoc)
        } catch (error) {

        }
    }

    useEffect(() => {
        imagegetData()
    }, [])
    return (
        <>
            <div className="PageHeading">
                <h1>My Kyc</h1>
            </div>
            <div className="ContentArea">
                <div className="card">
                    <div className="card-header"><span>My Kyc</span></div>
                    <div className="card-body">
                        <div className="form-row" style={{ alignItems: 'end' }}>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="card-Staff-Staff">
                                    <div className="card-header- text-white text-center fw-normal">
                                        ADHAAR FRONT CARD
                                    </div>
                                    <div className="card-body-Staff">
                                        <img src={initialValues?.adhaar_front_card
                                            ? `https://backoffice.adamclick.com/api/cloudinary/${initialValues?.adhaar_front_card}`
                                            : "https://adarshc.com/index/ent/document/default/aadhar.jpg"} alt="Adhaar Front Card" className="img-fluid mb-3" />
                                        {/* <p className="text-muted">DOC NOT UPLOADED</p>
                                        <p>Adhaar Front Card Not Found</p> */}
                                    </div>
                                    <div className="card-footerr">
                                        <input type="file" id={`image`} className="custom-file-input" accept="image/*" onChange={(e) => colodinaryImage(e, "adhaar_front_card")} />
                                        <label htmlFor={`image`} className="customs-file">
                                            <FaAngleDoubleUp />   Upload File
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="card-Staff-Staff">
                                    <div className="card-header- text-white text-center fw-normal">
                                        ADHAAR BACK CARD
                                    </div>
                                    <div className="card-body-Staff">
                                        <img src={initialValues?.adhaar_back_card
                                            ? `https://backoffice.adamclick.com/api/cloudinary/${initialValues?.adhaar_back_card}`
                                            : "https://adarshc.com/index/ent/document/default/aadhar.jpg"} alt="Adhaar Front Card" className="img-fluid mb-3" />
                                        {/* <p className="text-muted">DOC NOT UPLOADED</p>
                                        <p>Adhaar Front Card Not Found</p> */}
                                    </div>
                                    <div className="card-footerr">
                                        <input type="file" id={`adhaar_back_card`} className="custom-file-input" accept="image/*" onChange={(e) => colodinaryImage(e, "adhaar_back_card")} />
                                        <label htmlFor={`adhaar_back_card`} className="customs-file">
                                            <FaAngleDoubleUp />   Upload File
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="card-Staff-Staff">
                                    <div className="card-header- text-white text-center fw-normal">
                                        PAN CARD
                                    </div>
                                    <div className="card-body-Staff">
                                        <img src={initialValues?.pan_card
                                            ? `https://backoffice.adamclick.com/api/cloudinary/${initialValues?.pan_card}`
                                            : "https://adarshc.com/index/ent/document/default/aadhar.jpg"} alt="Adhaar Front Card" className="img-fluid mb-3" />
                                        {/* <p className="text-muted">DOC NOT UPLOADED</p>
                                        <p>Adhaar Front Card Not Found</p> */}
                                    </div>
                                    <div className="card-footerr">
                                        <input type="file" id={`pan`} className="custom-file-input" accept="image/*"
                                            onChange={(e) => colodinaryImage(e, "pan_card")} />
                                        <label htmlFor={`pan`} className="customs-file">
                                            <FaAngleDoubleUp />   Upload File
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="card-Staff-Staff">
                                    <div className="card-header- text-white text-center fw-normal">
                                        BANK PROOF
                                    </div>
                                    <div className="card-body-Staff">
                                        <img src={initialValues?.bank_proof
                                            ? `https://backoffice.adamclick.com/api/cloudinary/${initialValues?.bank_proof}`
                                            : "https://adarshc.com/index/ent/document/default/aadhar.jpg"}
                                            alt="Bank Proof" className="img-fluid mb-3" />
                                    </div>
                                    <div className="card-footerr">
                                        <input type="file" id="upload-bank-proof" className="custom-file-input" accept="image/*"
                                            onChange={(e) => colodinaryImage(e, "bank_proof")} />
                                        <label htmlFor="upload-bank-proof" className="customs-file">
                                            <FaAngleDoubleUp /> Upload File
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="card-Staff-Staff">
                                    <div className="card-header- text-white text-center fw-normal">
                                        KYC VIDEO
                                    </div>
                                    <div className="card-body-Staff">
                                        <img src={initialValues?.kyc_video
                                            ? `https://backoffice.adamclick.com/api/cloudinary/${initialValues?.kyc_video}`
                                            : "https://adarshc.com/index/ent/document/default/aadhar.jpg"} alt="Adhaar Front Card" className="img-fluid mb-3" />
                                        {/* <p className="text-muted">DOC NOT UPLOADED</p>
                                        <p>Adhaar Front Card Not Found</p> */}
                                    </div>
                                    <div className="card-footerr">
                                        <input type="file" id={`KYC_VIDEO`} className="custom-file-input" accept="image/*"
                                            onChange={(e) => colodinaryImage(e, "kyc_video")} />
                                        <label htmlFor={`KYC_VIDEO`} className="customs-file">
                                            <FaAngleDoubleUp />   Upload File
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="card-Staff-Staff">
                                    <div className="card-header- text-white text-center fw-normal">
                                        STATUS
                                    </div>
                                    <div className="card-body-Staff">
                                        <img src={imageData?.is_approved == true ? 'https://media.istockphoto.com/id/1219181841/vector/approved-stamp.jpg?s=612x612&w=0&k=20&c=Ob1oClnS4284pvOSe6pslEQ4NF0MlOUIyslD9WfshtU=' : 'https://st2.depositphotos.com/1031343/7519/v/380/depositphotos_75193785-stock-illustration-not-approved-stamp.jpg'} alt="Adhaar Front Card" className="img-fluid mb-3" />
                                        {/* <p className="text-muted">DOC NOT UPLOADED</p>
                                        <p>Adhaar Front Card Not Found</p> */}
                                    </div>
                                    {/* <div className="card-footerr">
                                        <input type="file" id={`upload-${''}`} className="custom-file-input" />
                                        <label htmlFor={`upload-${''}`} className="customs-file">
                                            <FaAngleDoubleUp />   Upload File
                                        </label>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <button type="button" onClick={submitForm} className="btn btn-primary">Submit</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer className="text-center" />
        </>


    )
}

export default StaffKyc