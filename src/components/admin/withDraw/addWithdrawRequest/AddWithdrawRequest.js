import { useEffect, useState } from "react"
import { ToastContainer } from "react-toastify"
import Loader from "../../../../common/loader/Loader"
import { userValidate, withdrawPost } from "../../../../api/login/Login"
import { toastSuccessMessage, toastSuccessMessageError } from "../../../../common/tostShow/TostShow"
import { Link, useNavigate } from "react-router-dom"


const AddWithdrawRequest = () => {

    const [loader, setLoader] = useState(false)
    const [formData, setData] = useState({
        amount: '',
        bank_name: '',
        holder_name: '',
        ifsc: '',
        bank_account_number: ''
    })
    const disabledButton = !formData.amount || !formData.bank_name || !formData.holder_name;
    const changeHande = async (e) => {
        const clone = { ...formData }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setData(clone)
    }

    const [checkValidate, setValidate] = useState(null)
    // console.log(checkValidate);


    const userValidatee = async () => {
        try {
            const res = await userValidate()

            setValidate(res?.data)
        } catch (error) {

        }
    }

    const navigate = useNavigate()

    const submitData = async () => {
        setLoader(true)
        const clone = { ...formData }
        // console.log(clone);

        try {
            const res = await withdrawPost(clone)
            // console.log(res?.data);
            setLoader(false)
            if (res?.data.error == false) {
                toastSuccessMessage(res?.data.message)
                navigate('/pending-list-withdraw-request/Pending')
            } else {
                toastSuccessMessageError(res?.data.message)
            }
        } catch (error) {
            setLoader(false)
        }
    }

    useEffect(() => {
        userValidatee()
    }, [])
    return (
        <>
            {loader && <Loader />}

            <div className="PageHeading">
                <h1>Add Withdraw Request</h1>
            </div>
            <div className="ContentArea">
                <div className="card">
                    <div className="card-header" style={{}}><span>Withdraw Request</span></div>
                    <div className="card-body" style={{}}>
                        <form method="post" name="frmBillReport" id="frmBillReport">
                            <input type="hidden" id="hidID" name="hidID" />
                            {checkValidate?.is_approved == false ? (
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <h3>please do onboarding first <Link to="/my_kyc" className="text-decoration-underline">Click Here</Link></h3>
                                    </div>
                                </div>
                            ) : (
                                <div className="form-row" style={{ alignItems: "end" }}>
                                    <div className="form-group col-lg-4 col-md-12 ">
                                        <label htmlFor="txtFrom">Holder Name <span style={{ color: 'red' }}>*</span></label>
                                        <input className="form-control datefield" id="txtFrom" name="holder_name" value={formData?.holder_name} type="text" placeholder="Enter Holder Name" onChange={changeHande} />
                                    </div>
                                    <div className="form-group col-lg-4 col-md-12 ">
                                        <label htmlFor="txtTo">Bank Name / UPI <span style={{ color: 'red' }}>*</span></label>
                                        <input className="form-control datefield" id="txtTo" name="bank_name" value={formData?.bank_name} type="text" placeholder="Enter Bank Name" onChange={changeHande} />
                                    </div>
                                    <div className="form-group col-lg-4 col-md-12 ">
                                        <label htmlFor="txtTo">Bank Account Number<span style={{ color: 'red' }}></span></label>
                                        <input className="form-control datefield" id="txtTo" name="bank_account_number" type="number" value={formData?.bank_account_number} placeholder="Enter Bank Account Number" onChange={changeHande} />
                                    </div>
                                    <div className="form-group col-lg-4 col-md-12 ">
                                        <label htmlFor="txtTo">Bank IFSC <span style={{ color: 'red' }}></span></label>
                                        <input className="form-control datefield" id="txtTo" name="ifsc" value={formData?.ifsc} type="text" placeholder="Enter Bank IFSC" onChange={changeHande} />
                                    </div>
                                    <div className="form-group col-lg-4 col-md-12 ">
                                        <label htmlFor="txtTo">Withdraw Amount <span style={{ color: 'red' }}>*</span></label>
                                        <input className="form-control datefield" id="txtTo" name="amount" type="text" value={formData?.amount} placeholder="Enter Withdraw Amount" onChange={changeHande} />
                                    </div>
                                    <div className="form-group col-lg-4 col-md-12 ">
                                        <label>&nbsp;</label>
                                        <button type="button" className="btn btn-primary" disabled={disabledButton} onClick={submitData}>Withdraw</button>
                                    </div>
                                </div>
                            )}



                        </form>
                    </div>

                </div>

            </div>
            <ToastContainer />
        </>
    )
}

export default AddWithdrawRequest