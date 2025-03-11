import { Pagination } from "antd"
import { useEffect, useState } from "react"
import { fundtransferToRefer, referVerifyPost } from "../../../api/login/Login"
import Loader from "../../../common/loader/Loader"
import { toastSuccessMessage, toastSuccessMessageError } from "../../../common/tostShow/TostShow"
import { ToastContainer } from "react-toastify"
import { useNavigate } from "react-router-dom"


const TransfertoPackageWallet = ({ walletShowHeader }) => {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(false)
    const [referData, setReferData] = useState(null)
    const [disabledButton, setDisabledButton] = useState(true)

    const [iniitalState, setInitialState] = useState({
        amount: '',
        refer_id: '',
        long: '',
        lat: '',
        remark: ''
    })
    const changeHandle = (e) => {
        const { name, value } = e.target;
        const clone = { ...iniitalState, [name]: value };
        setInitialState(clone);
        if (name === 'refer_id' && value.length >= 5) {
            getRefer(clone);
        }
    }


    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setInitialState((prevState) => ({
                        ...prevState,
                        lat: latitude,
                        long: longitude,
                    }));
                },
                (error) => {
                    alert("Error retrieving location: " + error.message);
                }
            );
        } else {
            alert("Geolocation is not supported by this browser. Please refresh the page!");
        }
    };


    const getRefer = async (data) => {
        try {
            const res = await referVerifyPost(data)
            if (res?.data?.error == false) {
                setReferData(res?.data?.data);
                alert('Success')
                setDisabledButton(false)
            } else {
                alert(res?.data?.message)
                setReferData('');
            }
        } catch (error) {

        }
    }

    const submitData = async () => {
        setLoader(true)
        // console.log(iniitalState);
        try {
            const res = await fundtransferToRefer(iniitalState)
            // console.log(res?.data?.error);

            if (res?.data?.error == false) {
                toastSuccessMessage(res?.data?.message)
                walletShowHeader()
                setLoader(false)
                setTimeout(() => {
                    navigate('/transfer-fund-report')
                }, 1000)

            } else {
                // console.log('sdfdsgd');
                toastSuccessMessageError(res?.data?.message)
                setLoader(false)
            }


        } catch (error) {
            setLoader(false)
        }

    }


    useEffect(() => {
        getLocation()
    }, [])
    return (
        <>
            {loader && <Loader />}
            <div className="PageHeading">
                <h1>Transfer Fund</h1>
            </div>
            <div className="ContentArea">
                <div className="card">
                    <div className="card-header"><span>TRANSFER FUND</span></div>
                    <div className="card-body">
                        <form action="" method="post" name="frmReport" id="frmReport">
                            <input type="hidden" id="hidID" name="hidID" />
                            <div className="form-row" >
                                {/* <div className="col-md-3">
                                    <div className="wallet-card">
                                        <div className="wallet-title">Income Wallet Balance</div>
                                        <div className="wallet-balance">$0</div>
                                        <div className="bar-chart">
                                            <div className="bar" />
                                            <div className="bar" />
                                            <div className="bar" />
                                            <div className="bar" />
                                            <div className="bar" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="wallet-card">
                                        <div className="wallet-title">Package Wallet Balance</div>
                                        <div className="wallet-balance">$0</div>
                                        <div className="bar-chart">
                                            <div className="bar" />
                                            <div className="bar" />
                                            <div className="bar" />
                                            <div className="bar" />
                                            <div className="bar" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="wallet-card">
                                        <div className="wallet-title">AIBOT Income Wallet Balance</div>
                                        <div className="wallet-balance">$0</div>
                                        <div className="bar-chart">
                                            <div className="bar" />
                                            <div className="bar" />
                                            <div className="bar" />
                                            <div className="bar" />
                                            <div className="bar" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="wallet-card">
                                        <div className="wallet-title">AIBOT Package Wallet Balance</div>
                                        <div className="wallet-balance">$0</div>
                                        <div className="bar-chart">
                                            <div className="bar" />
                                            <div className="bar" />
                                            <div className="bar" />
                                            <div className="bar" />
                                            <div className="bar" />
                                        </div>
                                    </div>
                                </div> */}


                                <div className="col-xl-6 mb-3 mt-2">
                                    <label for="exampleFormControlInput1" class="form-label">Transfer To(User ID) <span style={{ color: 'red' }}>*</span></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder='Enter Transfer To(User ID)'
                                        name="refer_id" value={iniitalState?.refer_id} onChange={changeHandle}
                                    />
                                    {referData && (
                                        <label for="exampleFormControlInput1" className="form-label" style={{ color: 'Blue', textAlign: 'center' }}>{referData?.name}</label>
                                    )}
                                </div>
                                <div className="col-xl-6 mb-3 mt-2">
                                    <label for="exampleFormControlInput1" className="form-label">Amount to be Transfer <span style={{ color: 'red' }}>*</span></label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder='Enter Amount to be Transfer '
                                        name="amount" value={iniitalState?.amount} onChange={changeHandle}
                                    />
                                </div>
                                <div className="col-xl-6 mb-3 mt-2">
                                    <label for="exampleFormControlInput1" className="form-label">Remarks <span style={{ color: 'red' }}>*</span></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder='Enter Remarks'
                                        name="remark" value={iniitalState?.remark} onChange={changeHandle}
                                    />
                                </div>
                                <div className="col-xl-12 text-center">
                                    <button type="button" className="btn btn-primary" disabled={disabledButton || !iniitalState?.amount || !iniitalState?.remark} onClick={submitData}>
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

export default TransfertoPackageWallet