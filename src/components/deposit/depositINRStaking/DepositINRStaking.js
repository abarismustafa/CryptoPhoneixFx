// import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";

import { useEffect, useState } from "react"
import { addDeposit, bankPublic, cloudImage, depositGetMaster } from "../../../api/login/Login"
import { baseUrlImage } from "../../../baseUrl"
import ReactFancyBox from 'react-fancybox';
import 'react-fancybox/lib/fancybox.css';
import { toastSuccessMessage, toastSuccessMessageError } from "../../../common/tostShow/TostShow";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";


const DepositINRStaking = () => {
    const navigate = useNavigate()
    const [profileImage, setProfileImage] = useState()
    // console.log(profileImage);

    const [imageShow, setImageShow] = useState()
    // console.log(imageShow);
    const [bankData, setBankData] = useState(null)
    const [depositData, setDepositData] = useState(null)
    const [selectedDeposit, setSelectedDeposit] = useState(null);
    // console.log(selectedDeposit);

    const [initialValue, setInitalValue] = useState({
        bank_name: '',
        bank_account_number: '',
        bank_holder_name: '',
        amount: '',
        deposit_id: '',
        utr_no: '',
        payment_mode: '',
        payment_deposit_date: '',
        reciept: '',
        duration: '',
        duration_type: '',
        remarks: ""
    })


    const getCurrentDate = () => {
        const clone = { ...initialValue, payment_deposit_date: new Date().toISOString().substr(0, 10) }
        setInitalValue(clone)
    }

    const onChangeHandle = (e) => {
        const { name, value } = e.target;
        const clone = { ...initialValue, [name]: value };
        if (name === 'bank_name') {
            const findBankAccount = bankData?.find((item) => item?.bank_name === value);
            clone.bank_account_number = findBankAccount?.bank_account_number || '';
        }

        if (name === 'deposit_id') {
            const findDeposit = depositData?.find((item) => item?._id === value);
            console.log(findDeposit);

            clone.duration_type = findDeposit?.fd_duration_type || '';
            setSelectedDeposit(findDeposit || null);
        }

        setInitalValue(clone);

        // const clone = { ...initialValue }
        // const value = e.target.value
        // const name = e.target.name
        // clone[name] = value

        // if (name === 'bank_name') {
        //     const findBankAccount = bankData.find((item) => item?.bank_name === value)
        //     const abc = findBankAccount?.bank_account_number
        //     const clone2 = { ...clone, bank_account_number: abc }
        //     setInitalValue(clone2)
        //     return
        // }

        // if (name === 'deposit_id') {
        //     const findDeposit = depositData?.find((item) => item?._id === value);
        //     setSelectedDeposit(findDeposit || null);
        // }
        // setInitalValue(clone)
    }


    const isDisabled = Object.values(initialValue).some(value => value === '') || !imageShow;
    const bankListName = async () => {
        try {
            const res = await bankPublic()
            // console.log(res);
            setBankData(res?.data?.data);
            const depoRes = await depositGetMaster()
            console.log(depoRes?.data?.data);
            setDepositData(depoRes?.data?.data);

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
        console.log(clone);
        try {
            const res = await addDeposit(clone)
            console.log(res?.data?.message);

            if (res?.data?.error == false) {
                toastSuccessMessage(res?.data?.message)
                setTimeout(() => {
                    // navigate('/deposit-report')
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
                <h1>Deposit USDT for Staking</h1>
            </div>
            <div className="ContentArea">
                <div className="card">
                    <div className="card-header"><span>Add Deposit USDT for Staking</span></div>
                    <div className="card-body">
                        <form action="" method="post" name="frmReport" id="frmReport">
                            <input type="hidden" id="hidID" name="hidID" />
                            <div className="form-row" >
                                <div className="col-lg-4 col-md-6 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Bank Name <span style={{ color: 'red' }}>*</span></label>
                                    <select className="form-control" aria-label="Default select example"
                                        value={initialValue?.bank_name}
                                        name="bank_name"
                                        onChange={onChangeHandle}
                                    >
                                        <option selected>Open this select Bank Name</option>
                                        {bankData && bankData?.map((item) => {
                                            return <option value={item?.bank_name}>{item?.bank_name}</option>
                                        })}
                                    </select>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Account Number / Company Address <span style={{ color: 'red' }}>*</span></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Account Number / Company Address"
                                        value={initialValue?.bank_account_number}
                                        name="bank_account_number"
                                        onChange={onChangeHandle}

                                    />
                                </div>
                                <div className="col-lg-4 col-md-6 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Debited A/c Holder Name  <span style={{ color: 'red' }}>*</span></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Debited A/c Holder Name "
                                        value={initialValue?.bank_holder_name}
                                        name="bank_holder_name"
                                        onChange={onChangeHandle}
                                    />
                                </div>
                                {/* <div className="col-xl-3 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Amount($)  <span style={{ color: 'red' }}>*</span></label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Enter Amount($) "
                                        value={initialValue?.amount}
                                        name="amount"
                                        onChange={onChangeHandle}
                                    />
                                </div> */}
                                <div className="col-xl-3 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Deposit Amount<span style={{ color: 'red' }}>*</span></label>
                                    <select className="form-control" name="deposit_id" value={initialValue.deposit_id} onChange={onChangeHandle}>
                                        <option value="">Select Deposit Amount</option>
                                        {depositData?.map((item) => (
                                            <option key={item._id} value={item._id}>{item.amount}</option>
                                        ))}
                                    </select>
                                    {selectedDeposit && <p style={{ color: 'green' }}>Compound Interest = {selectedDeposit?.cd_interest} (% Monthly)</p>}

                                </div>

                                <div className="col-xl-3 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Duration Type <span style={{ color: 'red' }}>*</span></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Duration Type "
                                        value={initialValue?.duration_type}
                                        name="duration_type"
                                        onChange={onChangeHandle}
                                        readOnly
                                    />
                                </div>
                                <div className="col-xl-3 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Duration <span style={{ color: 'red' }}>*</span></label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Enter Duration"
                                        value={initialValue?.duration}
                                        name="duration"
                                        onChange={onChangeHandle}
                                    />
                                </div>

                                <div className="col-xl-3 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">UTR/Reference No/HASH.  <span style={{ color: 'red' }}>*</span> </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter UTR/Reference No.  "
                                        value={initialValue?.utr_no}
                                        name="utr_no"
                                        onChange={onChangeHandle}
                                    />
                                </div>
                                <div className="col-xl-3 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Payment Mode  <span style={{ color: 'red' }}>*</span> </label>
                                    <select className="form-control" aria-label="Default select example"
                                        value={initialValue?.payment_mode}
                                        name="payment_mode"
                                        onChange={onChangeHandle}
                                    >
                                        <option selected>Open this select Payment Mode</option>
                                        <option value={"neft"}>NEFT</option>
                                        <option value={"rtgs"}>RTGS</option>
                                        <option value={"imps"}>IMPS</option>
                                    </select>
                                </div>
                                <div className="col-xl-3 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Payment Deposit Date <span style={{ color: 'red' }}>*</span></label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        value={initialValue?.payment_deposit_date}
                                        name="payment_deposit_date"
                                        onChange={onChangeHandle}
                                    />
                                </div>
                                <div className="col-xl-3 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Browse Slip <span style={{ color: 'red' }}>*</span>    </label>
                                    <input className="form-control datefield" id="txtFrom" name="reciept" type="file" onChange={colodinaryImage} />
                                    {imageShow &&
                                        <ReactFancyBox
                                            thumbnail={`${baseUrlImage}${imageShow}`}
                                            image={`${baseUrlImage}${imageShow}`}
                                        />
                                    }
                                </div>
                                <div className="col-xl-12 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Remarks <span style={{ color: 'red' }}>*</span></label>
                                    <textarea
                                        type="text"
                                        className="form-control"
                                        value={initialValue?.remarks}
                                        name="remarks"
                                        onChange={onChangeHandle}
                                    />
                                </div>

                                <div className="col-xl-12 text-center">
                                    <button type="button" className="btn btn-primary" disabled={!initialValue?.amount || !initialValue?.bank_account_number || !initialValue?.bank_holder_name || !initialValue?.bank_name || !initialValue?.deposit_id || !initialValue?.duration || !initialValue?.duration_type || !initialValue?.payment_deposit_date || !initialValue?.utr_no || !imageShow} onClick={submitData}>
                                        Submit Deposit Request
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
            <ToastContainer />
        </>
    )
}

export default DepositINRStaking