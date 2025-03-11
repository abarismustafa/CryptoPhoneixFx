import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { bankPublic, cloudImage, plan, tipinRequestPost } from "../../../../api/login/Login"
import ReactFancyBox from 'react-fancybox';
import 'react-fancybox/lib/fancybox.css';
import { ToastContainer } from "react-toastify";
import { baseUrlImage } from "../../../../baseUrl";
import { toastSuccessMessage } from "../../../compeleteRegister/ToastShare";
import { toastSuccessMessageError } from "../../../../common/tostShow/TostShow";


const RequestEpinAdd = () => {
    const navigate = useNavigate()
    const [profileImage, setProfileImage] = useState()
    // console.log(profileImage);

    const [imageShow, setImageShow] = useState()
    // console.log(imageShow);
    const [bankData, setBankData] = useState(null)
    const [planData, setPlanData] = useState(null)
    const [selectedDeposit, setSelectedDeposit] = useState(null);
    // console.log(selectedDeposit);

    const [initialValue, setInitalValue] = useState({
        no_of_pin_required: '',
        plan_id: '',
        paymentDate: '',
        method: '',
        bank: '',
        amount: '',
        bankRef: '',
        reciept: '',
        remark: "",
        account: ''
    })


    const getCurrentDate = () => {
        const clone = { ...initialValue, paymentDate: new Date().toISOString().substr(0, 10) }
        setInitalValue(clone)
    }

    const onChangeHandle = (e) => {
        const { name, value } = e.target;
        const clone = { ...initialValue, [name]: value };
        if (name === 'bank') {
            const findBankAccount = bankData?.find((item) => item?.bank_name === value);
            console.log(findBankAccount);

            clone.account = findBankAccount?.bank_account_number || '';
        }

        // if (name === 'deposit_id') {
        //     const findDeposit = depositData?.find((item) => item?._id === value);
        //     console.log(findDeposit);

        //     clone.duration_type = findDeposit?.fd_duration_type || '';
        //     setSelectedDeposit(findDeposit || null);
        // }

        setInitalValue(clone);
    }


    const isDisabled = Object.values(initialValue).some(value => value === '') || !imageShow;
    const bankListName = async () => {
        try {
            const res = await bankPublic()
            // console.log(res);
            setBankData(res?.data?.data);

            const planRes = await plan()
            setPlanData(planRes?.data?.data)


        } catch (error) {

        }
    }

    const imgs = new FormData();
    const colodinaryImage = async (e) => {
        if (!e.target || !e.target.files || e.target.files.length === 0) {
            console.error("No file selected");
            alert('Please select a file.');
            return;
        }

        const file = e.target.files[0];
        setProfileImage(file);
        imgs.append("image", file);

        const allowedTypes = [
            'image/jpeg',
            'image/png',
            'image/gif'
        ];

        if (!file.type || !allowedTypes.includes(file.type)) {
            console.error("Invalid file type", file.type);
            alert('Warning: Only JPEG, PNG, and GIF image files are allowed.');
            return;
        }

        try {
            // Add a 1-second delay before making the API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            const res = await cloudImage(imgs);
            if (res?.data?.data?.url) {
                setImageShow(res.data.data.url);
                setProfileImage(res.data.data.url);
            } else {
                throw new Error("Image URL not received from the server");
            }
        } catch (error) {
            console.error("Error uploading image:", error);
            alert("Error uploading image. Please try again.");
            setImageShow(null);
            setProfileImage(null);
        }
    }

    const submitData = async () => {
        const clone = { ...initialValue, reciept: profileImage }
        // console.log(clone);
        try {
            const res = await tipinRequestPost(clone)
            console.log(res?.data?.message);

            if (res?.data?.error == false) {
                toastSuccessMessage(res?.data?.message)
                setTimeout(() => {
                    navigate('/RequestEpin')
                }, 1000)
            } else {
                toastSuccessMessageError(res?.data?.message)
            }
        } catch (error) {

        }
    }

    useEffect(() => {
        bankListName()
        getCurrentDate()
    }, [])
    return (
        <>
            <div className="PageHeading">
                <h1>Request E-Pin</h1>
            </div>
            <div className="ContentArea">
                <div className="card">
                    <div className="card-header"><span>Add Deposit INR (Package)</span></div>
                    <div className="card-body">
                        <form action="" method="post" name="frmReport" id="frmReport">
                            <input type="hidden" id="hidID" name="hidID" />
                            <div className="form-row" >

                                <div className="col-xl-6 mb-3 mt-2">
                                    <label for="exampleFormControlInput1" class="form-label">No Of Pin Required <span style={{ color: 'red' }}>*</span></label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder='Enter No Of Pin'
                                        value={initialValue?.no_of_pin_required}
                                        name="no_of_pin_required"
                                        onChange={onChangeHandle}
                                    />
                                </div>
                                <div className="col-xl-6 mb-3 mt-2">
                                    <label for="exampleFormControlInput1" class="form-label">Plan <span style={{ color: 'red' }}>*</span></label>
                                    <select className="form-control" aria-label="Default select example"
                                        value={initialValue?.plan_id}
                                        name="plan_id"
                                        onChange={onChangeHandle}
                                    >
                                        <option selected>Open this Plan</option>
                                        {planData && planData?.map((item) => {
                                            return <option value={item?._id}>{item?.name}</option>
                                        })}
                                    </select>
                                </div>
                                <div className="col-xl-6 mb-3 mt-2">
                                    <label for="exampleFormControlInput1" class="form-label">Payment Date <span style={{ color: 'red' }}>*</span></label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        value={initialValue?.paymentDate}
                                        name="paymentDate"
                                        onChange={onChangeHandle}
                                    />
                                </div>
                                <div className="col-xl-6 mb-3 mt-2">
                                    <label for="exampleFormControlInput1" class="form-label">Method <span style={{ color: 'red' }}>*</span></label>
                                    <select className="form-select"
                                        value={initialValue?.method}
                                        name="method"
                                        onChange={onChangeHandle}
                                    >
                                        <option>Select Method</option>
                                        <option value={"neft"}>NEFT</option>
                                        <option value={"rtgs"}>RTGS</option>
                                        <option value={"imps"}>IMPS</option>
                                        <option value={"cashdeposit"}>Cash Deposit</option>
                                    </select>
                                </div>
                                <div className="col-xl-6 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Bank Name <span style={{ color: 'red' }}>*</span></label>
                                    <select className="form-control" aria-label="Default select example"
                                        value={initialValue?.bank}
                                        name="bank"
                                        onChange={onChangeHandle}
                                    >
                                        <option selected>Open this select Bank Name</option>
                                        {bankData && bankData?.map((item) => {
                                            return <option value={item?.bank_name}>{item?.bank_name}</option>
                                        })}
                                    </select>
                                </div>
                                <div className="col-xl-6 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Account Number <span style={{ color: 'red' }}>*</span></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Debited A/c Holder Name "
                                        value={initialValue?.account}
                                        name="account"
                                        onChange={onChangeHandle}

                                    />
                                </div>
                                <div className="col-xl-6 mb-3 mt-2">
                                    <label for="exampleFormControlInput1" class="form-label">Amount. <span style={{ color: 'red' }}>*</span></label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder='Enter Amount'
                                        value={initialValue?.amount}
                                        name="amount"
                                        onChange={onChangeHandle}
                                    />
                                </div>
                                <div className="col-xl-6 mb-3 mt-2">
                                    <label for="exampleFormControlInput1" class="form-label">Reference No. <span style={{ color: 'red' }}>*</span></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder='Enter Reference No.'
                                        value={initialValue?.bankRef}
                                        name="bankRef"
                                        onChange={onChangeHandle}
                                    />
                                </div>
                                <div className="col-xl-6 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Browse Slip <span style={{ color: 'red' }}>*</span>    </label>
                                    <input className="form-control datefield" id="txtFrom" name="reciept" type="file" onChange={colodinaryImage} />
                                    {imageShow &&
                                        <ReactFancyBox
                                            thumbnail={`${baseUrlImage}${imageShow}`}
                                            image={`${baseUrlImage}${imageShow}`}
                                        />
                                    }
                                </div>
                                <div className="col-xl-6 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Remarks <span style={{ color: 'red' }}>*</span></label>
                                    <textarea
                                        type="text"
                                        className="form-control"
                                        value={initialValue?.remark}
                                        name="remark"
                                        onChange={onChangeHandle}
                                    />
                                </div>

                                <div className="col-xl-12 text-align-center">
                                    <button type="button" className="btn btn-primary " disabled={!initialValue?.amount || !initialValue?.account || !initialValue?.bank || !initialValue?.plan_id || !initialValue?.paymentDate || !initialValue?.bankRef || !initialValue?.method || !initialValue?.no_of_pin_required || !initialValue?.remark || !imageShow} onClick={submitData}>
                                        Submit
                                    </button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
                <ToastContainer />
            </div >
        </>
    )
}

export default RequestEpinAdd